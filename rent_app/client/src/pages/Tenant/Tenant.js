import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";

// Components for ViewPorts
// TODO: Tenant Forms

import "./Tenant.css";
// API
// const axios = require("axios");

// page build
class Tenant extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="workStation">
                <Row>
                    <Col size="md-6">
                        <Container>

                        </Container>
                    </Col>
                    <Col size="md-6">
                        <h1>Column 2</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tenant;