import React, { Component } from "react";
import { Col, Container, Row } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";

const axios = require("axios");

class PropertyForm extends Component {

    state = {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        comments: "",
        redirect: false,
        redirectTo: null,
        landlord: this.props.landlord
    }
    componentDidMount() {
        console.log(this.props)
    }
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
            axios.post('./api/landlord/addProperty', {
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                nickname: this.state.nickname,
                comments: this.state.additional,
                landlordID: this.state.landlord.id,
                units: []
            }).then(res => {
                console.log(res);
                if (res.data.err) {
                    alert(res.data.err);
                    return;
                }
                var tempLandlord = this.state.landlord
                tempLandlord.properties.push(res.data.property);
                tempLandlord.properties[tempLandlord.properties.length - 1].units = []

                //################
                this.props.updateLandlordAndRedirect(tempLandlord)

            });
        }
    }


    render() {
        return (
            <Container className="fluid">
                <Row>
                    <Col size="md-12">
                        <h1>Add information for this property</h1>
                        <form align="left">
                            <Row>
                                <Col size="md-6">
                                    <Input
                                        value={this.state.streetAddress}
                                        onChange={this.handleInputChange}
                                        name="streetAddress"
                                        placeholder="1600 Pennsylvania Avenue"
                                        label="Enter the street address"
                                    />
                                    <Input
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                        name="city"
                                        placeholder="Kansas City"
                                        label="Enter the city"
                                    />
                                    <Input
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                        name="state"
                                        placeholder="Kansas"
                                        label="Enter the state"
                                    />
                                </Col>
                                <Col size="md-6">
                                    <Input
                                        value={this.state.zip}
                                        onChange={this.handleInputChange}
                                        name="zip"
                                        placeholder="123456"
                                        label="Enter the zip"
                                    />
                                    <Input
                                        value={this.state.nickname}
                                        onChange={this.handleInputChange}
                                        name="nickname"
                                        placeholder="MidTown Duplex (This is Not Required)"
                                        label="Enter a nickname for the property"
                                    />
                                </Col></Row>
                            <Row>
                                <Col size="md-12">
                                    <TextArea
                                        value={this.state.additional}
                                        onChange={this.handleInputChange}
                                        name="additional"
                                        placeholder="Enter Additional Info Here"
                                        label="Any additional info (500 characters max)"
                                    />
                                    <FormBtn
                                        disabled={
                                            !(this.state.streetAddress &&
                                                this.state.city &&
                                                this.state.state &&
                                                this.state.zip)
                                        }
                                        onClick={this.handleFormSubmit}
                                    >Submit
                                    </FormBtn>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default PropertyForm;
