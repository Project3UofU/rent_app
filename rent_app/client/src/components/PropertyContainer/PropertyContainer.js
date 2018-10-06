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
            {/* This is not yet actually functional, backend is working. */}
            <DeleteButton>Delete this property</DeleteButton>
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

                                    <div>
                                        < button type="button"
                                            onClick={() => this.props.changeView("CreateTenant")}
                                            className="btn btn-secondary"
                                        >
                                            Add a New Tenant
                                            </button>
                                    </div>
                                </div>

                            </div>
                        )
                        }


                    </div>


                ) : (
                    <h1>You Currently have no Units Created In this Property</h1>
                )}
            <p>{props.id}</p>
            <p>{props.changeView}</p>
            <button
                type="button"
                onClick={() => props.changeView("Unit", props.id)
                }
                className="btn btn-primary"
            >Add Another Unit
                                     </button>
            {/* {props.children} */}

        </div >
    )
}

export default PropertyContainer;