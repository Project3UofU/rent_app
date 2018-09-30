import React from "react";
import { Col, Row, Container } from "../Grid";


import "./Property.css"

export const PropertyContainer = props => {
    console.log("UNITS!!" + props.units);
    this.state = {

    }
    return (

        < div className="property-box" >
            <h4>Property Name: {props.name}</h4>
            <p>{props.address}</p>
            <p>created:{props.created}</p>

            {props.units.length ? (
                <div className="unit-deck card-deck">

                    {props.units.map(unit =>
                        <div className="card text-white bg-primary mb-3 unitCard">
                            <div className="card-header">{unit.name}</div>
                            <div className="card-body">
                                <h5 className="card-title">{unit.number}</h5>
                                <p>rent: {unit.rent}</p>
                                <p>deposit: {unit.deposit}</p>
                                <p>rooms: {unit.rooms}</p>
                                <p>created: {unit.created}</p>
                                <p>furnished: {unit.furnished}</p>

                            </div>

                        </div>
                    )
                    }
                </div>
            ) : (
                    <h1>You Currently have no Units Created In this Property</h1>
                )}
            {props.children}

        </div >
    )
}

export default PropertyContainer;