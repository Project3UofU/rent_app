import React from "react";
import { Input } from "./Input";
import { Col, Container, Row } from "../Grid";

export const Address = props => (
    <Container>
        <Row>
        <Input
            value={this.state.streetAddress}
            onChange={this.handleInputChange}
            name="streetAddress"
            placeholder="Street Address"
        />
        </Row>
        <Row>
            <Col size="md-6">
                <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City"
                />
            </Col>    
            <Col size="md-1">
            </Col>    
            <Col size="md-2">
                <Input
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    name="state"
                    placeholder="State"
                />
            </Col>    
            <Col size="md-1">
            </Col>    
            <Col size="md-2">
                <Input
                    value={this.state.zip}
                    onChange={this.handleInputChange}
                    name="zip"
                    placeholder="Zip Code"
                />
            </Col>    
        </Row>    
    </Container>
)