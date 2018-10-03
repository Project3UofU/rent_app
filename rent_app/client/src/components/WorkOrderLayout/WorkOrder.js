import React from "react";
import "./WorkOrder.css"


export const WorkOrder = props => {
    console.log("UNITS!!" + props);
    this.state = {

    }

    // TODO: functions for buttons!

    return (
        <div className="card text-center">
            <div className="card-header">
                HEADER / Title
            </div>
            <div className="card-body aling-left">
                <p className="card-text">Description of the problem</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                Last Updated: 2 days ago
            </div>
        </div>

    )
}

export default WorkOrder;







