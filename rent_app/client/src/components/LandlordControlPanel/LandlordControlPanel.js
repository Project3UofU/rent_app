import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

class LandlordControlPanel extends Component {
  state = {};
  render() {
    const props = this.props;
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Control Panel</h1>
            <h2>Place Newsfeed and form here</h2>
            <button
              type="button"
              onClick={() => props.changeView("Unit")}
              className="btn btn-primary"
            >
              New Unit
            </button>
            <button
              type="button"
              onClick={() => props.changeView("ViewProperties")}
              className="btn btn-primary"
            >
              View Properties
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandlordControlPanel;
