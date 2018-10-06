import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";

class LandlordControlPanel extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <img src="/images/RentKeeper-01.png" className="img-fluid" alt="RentKeeper" />
            <h1>Control Panel</h1>
            <button
              type="button"
              onClick={() => this.props.changeView("ViewProperties")}
              className="btn btn-primary"
            >
              View Properties
            </button>
            <button
              type="button"
              onClick={() => this.props.changeView("PropertyForm")}
              className="btn btn-primary"
            >Add A new Property
            </button>
            {this.props.children}

          </Col>
        </Row>
      </Container>
    );
  }
}
export default LandlordControlPanel;
