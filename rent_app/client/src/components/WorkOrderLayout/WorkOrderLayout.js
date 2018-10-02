import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

import "./WorkOrder.css"


class WorkOrderLayouts extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS: " + props);
        this.state = {

        }
    }

    render() {
        return (
            <Container className="fluid">
                <h1>WorkOrderLayouts</h1>


            </Container >
        )
    }
}
export default WorkOrderLayouts;