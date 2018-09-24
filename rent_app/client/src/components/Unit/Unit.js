import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";

class Unit extends Component {
    state = {
        streetAddress: "",
        city: "",
        estado: "",
        zip: "",
        number: "",
        rooms: "",
        furnished: false,
        additional: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.streetAddress &&
    //         this.state.city &&
    //         this.state.estado &&
    //         this.state.zip)
    //         API.createUnit({
    //             streetAddress: this.state.streetAddress,
    //             city: this.state.city,
    //             estado: this.state.estado,
    //             zip: this.state.zip,
    //             number: this.state.number,
    //             rooms: this.state.rooms,
    //             furnished: this.state.furnished,
    //             additional: this.state.additional
    //         });
    // }
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
                        value={this.state.estado}
                        onChange={this.handleInputChange}
                        name="estado"
                        placeholder="Enter the state"
                    />
                    <Input
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                        name="zip"
                        placeholder="Enter the zip"
                    />
                    <Input
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        name="number"
                        placeholder="Enter the unit number (if applicable)"
                    />
                    <Input
                        value={this.state.rooms}
                        onChange={this.handleInputChange}
                        name="rooms"
                        placeholder="Enter the number of rooms"
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
                            this.state.estado &&
                            this.state.zip }
                        onClick={this.handleFormSubmit}
                    >
                    Submit
                    </FormBtn>
                </form>
            </Col>
        </Container>
    )};
}

export default Unit;