import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Property } from "../Property"
import testProperties from "../../landlordtest.json"

class ViewProperties extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS: " + props.user);
        console.log("View Properties!")
    }
    state = {
        // Properties: testProperties,
    }

    render() {
        return (
            <Container className="fluid">
                {/* {this.state.Properties.map(Property => (
                    <Property
                        units={Property.units}
                        name={Property.name}
                    />
                ))
                } */}
                <h1 className="display-1">This is ViewProperties Component</h1>

                {/* <h4><font color="red">Name: {this.props.user.local.username}</font></h4> */}
            </Container>
        )
    }
}
export default ViewProperties;