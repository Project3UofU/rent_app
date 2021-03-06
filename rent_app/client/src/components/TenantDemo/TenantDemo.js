import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
// import "./tena.css";
const axios = require("axios");

class TenantDemo extends Component {
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        // preffered method dropdown or select
        numberOfTenants: "",
        // numberOfDependents: "",
        // ageOfDependents: "",
        comments: "",
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
        //required info
        if (this.state.username === "" ||
            this.state.password === "" ||
            this.state.firstName === "" ||
            this.state.lastName === "" ||
            (this.state.email === "" ||
                this.state.phone === "")
        ) {
            alert("Please provide all required information");
            return;
        } else {
            axios.post('./api/unit/addTenant', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                // preffered method dropdown or select
                numberOfTenants: this.state.numberOfTenants,
                numberOfDependents: this.state.numberOfDependents,
                ageOfDependents: this.state.ageOfDependents,
                comments: this.state.comments
            }).then(res => {
                console.log(res);
                if (res.data.err) {
                    alert(res.data.err)
                    return;
                }
                this.setState({
                    redirect: true,
                    redirectTo: "./TenantUnitInfo"
                })
            })
        }
    };



    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <Container className="fluid">
                <Row>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                label="First Name"
                                placeholder="Tenant's First Name"
                            />
                            <Input
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                label="Last Name"
                                placeholder="Tenant's Last Name"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                label="E-mail address"
                                placeholder="Tenant@Homepage.com"
                            />
                        </form>
                    </Col>
                    <Col size="md-6">
                        <form>
                            <Input
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                name="phone"
                                label="Phone number"
                                placeholder="(555)867-5309"
                            />
                            <Input
                                value={this.state.numberOfTenants}
                                onChange={this.handleInputChange}
                                name="numberOfTenants"
                                label="Number of tenants"
                                placeholder="(555)867-5309"
                            />
                            {/* <Input
                            value={this.state.numberOfDependents}
                            onChange={this.handleInputChange}
                            name="numberOfDependants"
                            label="Number of dependants"
                        placeholder= ""
                            />
                        <Input
                            value={this.state.ageOfDependents}
                            onChange={this.handleInputChange}
                            name="ageOfDependants"
                            label="Age of dependents"
                        placeholder= ""/>
                         */}
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <form>
                            <TextArea
                                value={this.state.comments}
                                onChange={this.handleInputChange}
                                name="comments"
                                label="Additional comments (500 charcters max)"
                                placeholder="Place your comments here"
                            />
                            <FormBtn
                                disabled={
                                    !(this.state.username &&
                                        this.state.password &&
                                        this.state.firstName &&
                                        this.state.lastName &&
                                        (this.state.email ||
                                            this.state.phone))
                                }
                                onClick={this.handleFormSubmit}
                            >
                                Next
                                </FormBtn>
                        </form>
                    </Col>
                </Row>


            </Container >
        );
    }
}

export default TenantDemo;