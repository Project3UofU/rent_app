import React, { Component } from "react";
import LandlordLogin from "../../components/Buttons/LandlordLogin.js";
import RenterLogin from "../../components/Buttons/RenterLogin";
import Register from "../../components/Buttons/Register";
import { Link } from "react-router-dom";
// issue with merge???
// import { Column, Container } from "../../components/Grid";

class Landing extends Component {
    componentDidMount() {
        // not sure here
    }

    render() {
        // still need a background image and proper formatting
        return (
            <Container fluid>
                <Column size="md-12">
                    <h1 className="logo">apprentice</h1>
                    <a>
                    <LandlordLogin></LandlordLogin>
                    </a>
                    <a>
                    <RenterLogin></RenterLogin>
                    </a>
                    <a>
                    <Register></Register>
                    </a>
                </Column>
            </Container>
            // maybe a small landing footer?
        )
    }
}