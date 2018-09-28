import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

class ViewProperties extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS: " + props.user);
    }
    state = {

    }
    render() {
        return (
            <Container className="fluid">
                <h1 className="display-1">This is ViewProperties Component</h1>

                <h4><font color="red">Name: {this.props.user.local.username}</font></h4>
            </Container>
        )
    }
}
export default ViewProperties;