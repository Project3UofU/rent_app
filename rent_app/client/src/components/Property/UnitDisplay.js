import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";

class UnitDisplay extends Component {
    state = {
        props: {
            address: "Address",
            name: "Name",
            created: "created"
        }
    };
    render() {
        return (
            < div className="card text-white bg-primary mb-3" style="max-width: 18rem;" >
                <div className="card-header">Unit:{this.props.name}</div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.address}</h5>
                    <p className="card-text">Created: {this.props.created}</p>

                </div>
            </div>
        )
    }
}
export default UnitDisplay;