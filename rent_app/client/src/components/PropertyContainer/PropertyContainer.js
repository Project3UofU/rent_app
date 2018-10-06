import React from "react";

import "./Property.css"

export const PropertyContainer = props => {

    // TODO: functions for buttons!
    // unoccupiedUnit = el => {
    //     let el = this.parentElement;
    //     el.classList.remove('primary');
    //     el.classList.add('warning')
    // }

    return (

        < div className="property-box" >
            <h4>{props.name}</h4>
            <p>{props.address}</p>
            <p>{props.city}  {props.state}</p>
            <p>{props.comments}</p>

            {props.units.length ? (
                <div className="unit-deck card-deck">

                    {props.units.map(unit =>
                        <div className="card text-white bg-primary mb-3 unitCard">

                            <div className="card-header">
                                {unit.name}

                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{unit.number}</h5>
                                {/* BELOW is an example of collapsable content */}
                                <button data-toggle="collapse" data-target=".unit-rental">Rental Info</button>
                                <div id="" className="collapse unit-rental">
                                    <p>rent: {unit.rent}</p>
                                    <p>deposit: {unit.deposit}</p>
                                </div>

                                <p>rooms: {unit.rooms}</p>
                                <p>created: {unit.created}</p>
                                {unit.furnished ? (
                                    <p>Furnished</p>
                                ) : (
                                        <p>Not Furnished</p>)
                                }
                                {unit.tenant.name ?
                                    (
                                        < p > {unit.tenant.name}</p>
                                    ) : (
                                        <div>
                                            < button type="button"
                                                onClick={() => this.props.changeView("CreateTenant")}
                                                className="btn btn-secondary"
                                            >
                                                Add a new Tenant
                                            </button>
                                        </div>)
                                }
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