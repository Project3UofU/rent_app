import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormBtn, Input } from "../../components/Form";
import { Row, Container, Col } from "../../components/Grid";
import { Link } from "react-router-dom";


import "./register.css";
const axios = require("axios");

class Register extends Component {
    state = {
        // TODO: additional demo info here
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        businessPhone: "",
        cellPhone: "",
        homePhone: "",
        fax: "",
        businessAddress: "",
        mailingAddress: "",
        redirect: false,
        redirectTo: null
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (
            this.state.password === "" ||
            this.state.firstName === "" ||
            this.state.lastName === "" ||
            this.state.email === ""

        ) {
            alert("Please provide all required information");
            return;
        } else if (
            this.state.businessPhone === "" &&
            this.state.cellPhone === "" &&
            this.state.homePhone === ""
        ) {
            alert("Please provide a phone number");
            return;
        } else if (
            this.state.password !== this.state.confirmPassword
        ) {
            alert("Your passwords must match");
            return;
        } else {
            axios.post('./api/auth/signup', {
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.email,
                businessPhone: this.state.businessPhone,
                cellPhone: this.state.cellPhone,
                homePhone: this.state.homePhone,
                fax: this.state.fax,
                businessAddress: this.state.businessAddress,
                mailingAddress: this.state.mailingAddress,
            }).then(res => {
                console.log(res);
                if (res.data.err) {
                    alert(res.data.err);
                    return;
                }
                this.setState({
                    redirect: true,
                    redirectTo: "./landlord"
                });

            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <Container className="fluid bottom-buffer">
                <Row>
                    <Col size="md-12">
                        <h1>Register as a landlord on Rent Keeper</h1>
                        <Row>
                            <Col size="md-6">
                                <form className="align-left">
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        label="Enter Your Email Address"
                                        placeholder="email"
                                    />
                                    <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        type="password"
                                        label="Create a password"
                                        placeholder="password"
                                    />
                                    <Input
                                        value={this.state.confirmPassword}
                                        onChange={this.handleInputChange}
                                        name="confirmPassword"
                                        type="password"
                                        label="Re-Enter your password "
                                        placeholder="password"
                                    />
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        label="First Name"
                                        placeholder="First Name"
                                    />
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        label="Last Name"
                                        placeholder="Last Name"
                                    />
                                </form>
                            </Col>

                            <Col size="md-6">
                                <form className="align-left">
                                    <Input
                                        value={this.state.businessPhone}
                                        onChange={this.handleInputChange}
                                        name="businessPhone"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        required
                                        label="Business Phone"
                                        placeholder="(555)867-5309"
                                    />
                                    <Input
                                        value={this.state.cellPhone}
                                        onChange={this.handleInputChange}
                                        name="cellPhone"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        label="Cell Phone"
                                        placeholder="(555)867-5309"
                                    />
                                    <Input
                                        value={this.state.homePhone}
                                        onChange={this.handleInputChange}
                                        name="homePhone"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        label="Home Phone"
                                        placeholder="(555)867-5309"
                                    />
                                    <Input
                                        value={this.state.fax}
                                        onChange={this.handleInputChange}
                                        name="fax"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        label="Fax Number"
                                        placeholder="(555)867-5309"
                                    />
                                    <Input
                                        value={this.state.businessAddress}
                                        onChange={this.handleInputChange}
                                        name="businessAddress"
                                        label="Business Address"
                                        placeholder="Business Address"
                                    />
                                    <Input
                                        value={this.state.mailingAddress}
                                        onChange={this.handleInputChange}
                                        name="mailingAddress"
                                        label="Mailing Address"
                                        placeholder="Mailing Address"
                                    />

                                </form>
                            </Col>

                        </Row><Row>
                            <FormBtn
                                disabled={
                                    !(this.state.password &&
                                        this.state.firstName &&
                                        this.state.lastName &&
                                        this.state.email &&
                                        (this.state.businessPhone ||
                                            this.state.cellPhone ||
                                            this.state.homePhone))
                                }
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                                </FormBtn>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Register;