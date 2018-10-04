import React, { Component } from "react";
import { PropertyContainer } from "../PropertyContainer"
import testProperties from "../../landlordtest.json"
class ViewProperties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Properties: testProperties,
        }
    }

    render() {
        return (
            <div>
                {this.state.Properties.length ? (
                    <div>
                        {this.state.Properties.map(property =>
                            <PropertyContainer
                                key={property._id}
                                created={property.created}
                                address={property.address}
                                name={property.name}
                                landlord={property.landlord}
                                units={property.units}
                                test={property.units.length}
                            >
                                {property.units.length ? (
                                    <button
                                        type="button"
                                        onClick={() => this.props.changeView("Unit")}
                                        className="btn btn-primary"
                                    >Add Another Unit
                                    </button>
                                ) : (
                                        <button
                                            type="button"
                                            onClick={() => this.props.changeView("Unit")}
                                            className="btn btn-warning"
                                        >Add A New Unit!
                                        </button>
                                    )}

                            </PropertyContainer>
                        )}

                    </div>

                ) : (
                        <div>
                            <h3>No Results to Display</h3>
                            <button
                                type="button"
                                onClick={() => this.props.changeView("PropertyContainer")}
                                className="btn btn-warning"
                            >Add A new Property
                            </button>
                        </div>
                    )
                }

            </div >
        )
    }
}
export default ViewProperties;