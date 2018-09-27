import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";
// Components for ViewPorts

// CSS
import "./Tenant.css";

// import API from "../../utils/API";

// page build
class Tenant extends Component {
    state = {

    };
    // Tenant Navigation Functions

    render() {
        return (
            <div>
                <Row>
                    <Col size="md-12">
                        <Container>
                            <h1>TenantView</h1>
                        </Container>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Tenant;