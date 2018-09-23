import React, { Component } from "react";
import { FormBtn, Input } from "../../components/Form";
import { Row, Container, Col } from "../../components/Grid";
import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        // TODO: additional demo info here
        username: "",
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
        homeAddress: ""
    };

    // compnonentDidMount() {
        
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.username && this.state.password) {
    //         // what is the API for this?
    //         API.createUser({
    //             username: this.state.username,
    //             password: this.state.password
//                 firstName: this.state.firstName,
//                 lastName: this.state.lastName,
//                 email: this.state.email,
//                 businessPhone: this.state.businessPhone
//                 cellPhone: this.state.cellPhone
    //             homePhone: this.state.homePhone,
//                 fax: this.state.fax
//                 businessAddress: this.state.businessAddress,
//                 mailingAddress: this.state.mailingAddress,
//                 homeAddress: this.state.homeAddress
// 
//     
    //         })
    //         // TODO: POST to API, load Landlord page after pulling API info
    //             // .then(res => )
    //             .catch(err => console.log(err));
    //     }

    // }

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <h1>Register as a landlord on rentKeeper</h1>
                    <form>
                        {/* TODO: additional demo in form */}
                        <Input 
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Create a username"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Create a password"
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
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="email"
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
                        <Input
                            value={this.state.homeAddress}
                            onChange={this.handleInputChange}
                            name="homeAddress"
                            placeholder="homeAddress"
                        />
                        <FormBtn
                            disabled={
                                !this.state.username && 
                                this.state.password &&
                                this.state.firstName &&
                                this.state.lastName &&
                                this.state.email &&
                                (this.state.businessPhone ||    
                                this.state.cellPhone || 
                                this.state.homePhone) &&
                                (this.state.businessAddress ||
                                this.state.homeAddress) &&
                                this.state.mailingAddres }
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