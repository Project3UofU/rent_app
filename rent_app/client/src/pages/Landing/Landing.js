import React, { Component } from "react";
import LandlordLogin from "../../components/Buttons/LandlordLogin.js";
import RenterLogin from "../../components/Buttons/RenterLogin";
import Register from "../../components/Buttons/Register";
import { Link } from "react-router-dom";
// issue with merge???
import { Col, Container } from "../../components/Grid";

class Landing extends Component {
    componentDidMount() {
        // not sure here
    }

    render() {
        // still need a background image and proper formatting
        // need to 
        return (
            <Container fluid>
                <Col size="md-12">
                    <h1 className="logo">apprentice</h1>
                    <Link to={"/landlord_home"}>
                        <LandlordLogin></LandlordLogin>
                    </Link>
                    <Link to={"/renter_home"}>
                    <RenterLogin></RenterLogin>
                    </Link>
                    <Link to={"/register"}>
                    <Register></Register>
                    </Link>
                </Col>
            </Container>
            // maybe a small landing footer?
        )
    }
}

export default Landing;