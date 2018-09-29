import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
const axios = require("axios");

class UnitForm extends Component {
  state = {
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    numberOfRooms: "",
    rooms: "",
    furnished: "",
    additional: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.streetAddress === "" ||
        this.state.city === "" ||
        this.state.state === "" ||
        this.state.zip === "" 
        ) {
            alert("Please provide all the required information");
            return;
        } else {
            axios.post('./api/landlord/property', {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                nickname: this.state.nickname,
                comments: this.state.additional
                // landlordID: this.state.landlordID?
            }).then(res => {
                console.log(res);
                if (res.data.err) {
                    alert(res.data.err);
                    return;
                }
                this.setState({
                    redirect: true,
                    redirectTo: "./unitform"
                });
            });
        }
    }


    render() {
    return (
      <Container className="fluid">
        <Col size="md-8">
          <h1>Add information for this unit</h1>
          <form>
            <Input
              value={this.state.city}
              onChange={this.handleInputChange}
              name="city"
              placeholder="Enter the city"
            />
            <Input
              value={this.state.state}
              onChange={this.handleInputChange}
              name="state"
              placeholder="Enter the state"
            />
            <Input
              value={this.state.zip}
              onChange={this.handleInputChange}
              name="zip"
              placeholder="Enter the zip"
            />
            <Input
              value={this.state.numberOfUnits}
              onChange={this.handleInputChange}
              name="numberOfUnits"
              placeholder="Enter the number of units"
            />
            
            {/* TODO: this needs to be a boolean with an additional form for any furnishings */}
            <Input
              value={this.state.furnished}
              onChange={this.handleInputChange}
              name="furnished"
              placeholder="Is the unit furnished"
            />
            <TextArea
              value={this.state.additional}
              onChange={this.handleInputChange}
              name="additional"
              placeholder="Any additional info (500 characters max)"
            />
            <FormBtn
              disabled={
                !this.state.streetAddress &&
                this.state.city &&
                this.state.state &&
                this.state.zip
              }
              onClick={this.handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
      </Container>
    );
  }
}

export default UnitForm;
