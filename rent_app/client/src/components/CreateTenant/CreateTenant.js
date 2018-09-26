import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";

class CreateTenant extends Component {
    state = {

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //    
    // }
    render() {
        return (
            <Container className="fluid">
                <Col size="md-8">
                    <h1>This is Create Tenant Component</h1>
                </Col>
            </Container>
        );
    }
}

export default CreateTenant;