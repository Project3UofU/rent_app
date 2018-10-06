import React, { Component } from "react";
import { PropertyContainer } from "../PropertyContainer"
import testProperties from "../../landlordtest.json"


class ViewProperties extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Properties: [],
        }
    }

    toggleFunction = () => {
        this.state.Properties === testProperties ? (

            this.setState({ Properties: this.props.landlord.properties })
        ) : (
                console.log(this.props)
            )

    }
    componentDidMount() {
        this.setState(
            {
                landlord: this.props.landlord,
                Properties: this.props.landlord.properties
            }
        )
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={() => this.toggleFunction()}
                    className="btn btn-primary"
                >Mark's Special Test Button
                </button>
                {this.state.Properties.length ? (
                    <div>
                        {this.state.Properties.map(property =>
                            <PropertyContainer
                                key={property._id}
                                created={property.created}
                                city={property.city}
                                state={property.state}
                                comments={property.comments}
                                address={property.address}
                                name={property.nickname}
                                landlord={this.state.landlord}
                                units={property.units}
                            >
                                {
                                    property.units.length ? (
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