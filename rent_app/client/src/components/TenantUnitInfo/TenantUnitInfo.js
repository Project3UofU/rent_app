import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import "./register.css";
const axios = require("axios");

class TenantUnitInfo extends Component {
    state = {
        leaseToOwn: "",
        rentAmount: "",
        securityDep: "",
        rentAssist: "",
        pets: "",
        numOfVehicles: "",
        trailer: "",
        moreComments: ""
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
        if (this.state.rentAmount === "" ||
        this.state.securityDep === "" ||
        this.state.numOfVehicles === "") {
            alert("Please provide all required information");
            return;
        } else {
            axios.post('./api/unit/addTenant', {
                leaseToOwn: this.state.leaseToOwn,
                rentAmount: this.state.rentAmount,
                securityDep: this.state.securityDep,
                rentAssist: this.state.rentAssist,
                pets: this.state.pets,
                numOfVehicles: this.state.numOfVehicles,
                trailer: this.state.trailer,
                moreComments: this.state.moreComments
            }).then(res => {
                console.log(res);
                if (res.data.err) {
                    alert(res.data.err) 
                    return;
                }
                //TODO: changeredirect
                this.setState({
                    redirect: true,
                    redirectTo: "./TenantUnitInfo"
                })
            })
        }
    };



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

export default TenantUnitInfo;