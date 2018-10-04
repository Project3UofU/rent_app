import React, { Component } from "react";
import { Col, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
const axios = require("axios");
// import Landlord from "../../pages/Landlord";

class UnitForm extends Component {
  state = {
    rent: "",
    securityDeposit: "",
    name: "",
    // additional: "",
    redirect: false,
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post('./api/property/addUnit', {
      rent: this.state.rent,
      securityDeposit: this.state.securityDeposit,
      name: this.state.name,
      comments: this.state.additional
      // landlordID: this.state.landlordID?
    }).then(res => {
      console.log(res);
      if (res.data.err) {
        alert(res.data.err);
        return;
      } else {
        this.setState({
          redirect: true,
          redirectTo: "./Landlord"
        });
      }
    });
  }






  render() {
    if (this.state.redirect) {
      alert("test");
      return <Redirect to={this.state.redirectTo} />;
    }
    return (
      <Container className="fluid">
        <Col size="md-8">
          <h1>Add information for this unit</h1>
          <form>
            {/* TODO: do we want to enter number of rooms? */}
            {/* <Input
              value={this.state.numberOfRooms}
              onChange={this.handleInputChange}
              name="numberOfRooms"
              placeholder="Enter the number of rooms in this unit"
            /> */}

            {/* TODO: this needs to be a boolean with an additional form for any furnishings */}
            {/* future development
            <Input
              value={this.state.furnished}
              onChange={this.handleInputChange}
              name="furnished"
              placeholder="Is the unit furnished"
            /> */}
            <Input
              value={this.state.rent}
              onChange={this.handleInputChange}
              name="rent"
              placeholder="What is the rent for this unit?"
            />
            <Input
              value={this.state.securityDeposit}
              onChange={this.handleInputChange}
              name="securityDeposit"
              placeholder="What is the security deposit for this unit?"
            />
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="What is the name of this unit?"
            />
            {/* <TextArea
              value={this.state.additional}
              onChange={this.handleInputChange}
              name="additional"
              placeholder="Any additional info (500 characters max)"
            /> */}
            <FormBtn
              // disabled={
              //   !this.state.streetAddress &&
              //   this.state.city &&
              //   this.state.state &&
              //   this.state.zip
              // }
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
