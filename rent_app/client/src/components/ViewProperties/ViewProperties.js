import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { PropertyContainer } from "../PropertyContainer"
import testProperties from "../../landlordtest.json"
class ViewProperties extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS: " + props.user);
        console.log("View Properties! " + testProperties[0].created)

        this.state = {
            Properties: testProperties,
        }
    }

    render() {
        return (
            <Container className="fluid">
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
                            <button>Add New Property</button>
                        </div>
                    )
                }

            </Container >
        )
    }
}
export default ViewProperties;