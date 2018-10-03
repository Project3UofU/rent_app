import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import WorkOrder from "./WorkOrder"
import "./WorkOrder.css"


class WorkOrderLayouts extends Component {

    constructor(props) {
        super(props);
        console.log("WO PROPS: " + props);
        this.state = {
            workOrders: []
        }
    }

    render() {
        return (
            <Container className="fluid">
                <h4>WorkOrderLayouts</h4>
                <hr />
                {this.state.workOrders.length ? (
                    <div>
                        {this.state.workOrders.map(property =>
                            <WorkOrder

                            >

                            </WorkOrder>
                        )}
                    </div>
                ) : (
                        <h1> No Work Orders to Show.</h1>
                    )}

            </Container >
        )
    }
}
export default WorkOrderLayouts;