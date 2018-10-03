import React, { Component } from "react";
import { Redirect } from "react-router-dom"; 
import { FormBtn, Input } from "../../components/Form";
import { Row, Container, Col } from "../../components/Grid";
import { Link } from "react-router-dom";
// import "./register.css";
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
                    if(res.data.err) {
                        alert(res.data.err);
                        return;
                    } 
                    this.setState({
                        redirect: true,
                        redirectTo: "./login"
                    });
                });
            }
        }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirectTo}} />
        }
        return (
            <Container className="fluid">
            <Row>
                <Col size="md-8">
                    <h1>Register as a landlord on Rent Keeper</h1>
                    <form>
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="email"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Create a password"
                        />
                        <Input
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            name="confirmPassword"
                            placeholder="Reenter your password"
                        />
                        <Input
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            name="firstName"
                            placeholder="First Name"
                        />
                        <Input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <Input
                            value={this.state.businessPhone}
                            onChange={this.handleInputChange}
                            name="businessPhone"
                            placeholder="Business Phone"
                        />
                        <Input
                            value={this.state.cellPhone}
                            onChange={this.handleInputChange}
                            name="cellPhone"
                            placeholder="Cell Phone"
                        />
                        <Input
                            value={this.state.homePhone}
                            onChange={this.handleInputChange}
                            name="homePhone"
                            placeholder="Home Phone"
                        />
                        <Input
                            value={this.state.fax}
                            onChange={this.handleInputChange}
                            name="fax"
                            placeholder="Fax Number"
                        />
                        <Input
                            value={this.state.businessAddress}
                            onChange={this.handleInputChange}
                            name="businessAddress"
                            placeholder="Business Address"
                        />
                        <Input
                            value={this.state.mailingAddress}
                            onChange={this.handleInputChange}
                            name="mailingAddress"
                            placeholder="Mailing Address"
                        />
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
                    </form>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Register;