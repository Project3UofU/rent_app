import React from "react";
import DeleteButton from "../../components/Buttons/DeleteButton";

import "./Property.css"
const axios = require("axios");

export const PropertyContainer = props => {

    // TODO: functions for buttons!
    // unoccupiedUnit = el => {
    //     let el = this.parentElement;
    //     el.classList.remove('primary');
    //     el.classList.add('warning')
    // }

    // handleDelete = event => {
    //     event.preventDefault();
    //     if (confirm("This will permanently delete this property! Are you sure you want to delete?")) {
    //         axios.delete('./api/property/remove/', {
    //             // Not actual Path, but this is what needs to be passed
    //             // property: this.state.property.id
    //         });
    //     })
    // }

    return (

        < div className="property-box" >
            <h4>{props.name}</h4>
            <p>{props.address}</p>
            <p>{props.city}  {props.state}</p>
            <p>{props.comments}</p>

            {props.units.length ?

                (
                    <div className="unit-deck card-deck">

                        {props.units.map(unit =>
                            <div className="card text-white bg-primary mb-3 unitCard">

                                <div className="card-header">
                                    {unit.name}

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{unit.number}</h5>
                                    {/* BELOW is an example of collapsable content */}
                                    <button data-toggle="collapse" data-target={`#comment${unit.id}`}>Rental Info</button>
                                    <div id={`comment${unit.id}`} className="collapse unit-rental">
                                        <p>rent: {unit.rent}</p>
                                        <p>deposit: {unit.securityDeposit}</p>
                                    </div>

                                    <p>rooms: {unit.rooms}</p>
                                    <p>created: {unit.created}</p>
                                    {unit.furnished ? (
                                        <p>Furnished</p>
                                    ) : (
                                            <p>Not Furnished</p>)
                                    }
                                    {unit.addtional ? (
                                        <div>
                                            <button data-toggle="collapse" data-target={`#${unit.id}`}>Comments</button>
                                            <div id={unit.id} className="collapse unit-rental">
                                                <p>{unit.additional}</p>
                                            </div>
                                        </div>
                                    ) : (
                                            <p>No Comments</p>)
                                    }

                                    <div>
                                        {/* <button type="button"
                                            onClick={() => this.props.changeView("CreateTenant")}
                                            className="btn btn-secondary"
                                        >
                                            Add a New Tenant
                                            </button> */}
                                    </div>
                                </div>

                            </div>
                        )
                        }


                    </div>


                ) : (
                    <div>
                        <h1>You have created an empty property!</h1>
                        <h2>There are no Units</h2>
                        <h2>Click below To add a new unit</h2>
                    </div>
                )}

            <button
                type="button"
                onClick={() => props.changeView("Unit", props.id)
                }
                className="btn btn-primary"
            >Add Another Unit
                                     </button>

            {/* {props.children} */}
            {/* This is not yet actually functional, backend is working. */}
            <DeleteButton>Delete this property</DeleteButton>
        </div >
    )
}

export default PropertyContainer;