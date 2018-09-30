import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import UnitDisplay from "./UnitDisplay"

import testProperties from "../../landlordtest.json"

class Property extends Component {
    state = {

    };
    // console.log(testProperties)
    render() {
        return (
            < div className="card text-white bg-primary mb-3" style="max-width: 18rem;" >
                <div className="card-header">Property:</div>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <Row>
                        <Col size="md-12">
                            <p className="card-text">Created: </p>

                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
export default Property;