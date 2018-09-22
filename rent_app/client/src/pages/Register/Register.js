import React, { Component } from "react";
import { FormBtn, Input } from "../../components/Form";
import { Row, Container, Col } from "../../components/Grid";
import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        // TODO: additional demo info here
        username: "",
        password: ""
    };

    // compnonentDidMount() {
        
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            // what is the API for this?
            API.createUser({
                username: this.state.username,
                password: this.state.password
                // We will want additional demographic info
                // firstName, lastName, phoneNumber[business, home, cell], email, preferedContact
                // address[business, home, mailing]
                // others?
            })
            // TODO: POST to API, load Landlord page after pulling API info
                // .then(res => )
                .catch(err => console.log(err));
        }

    }

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="md-8">
                    <h1>Register as a landlord on reantanator 2000!</h1>
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
                        <FormBtn
                            disabled={!this.state.username && this.state.password}
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