import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";
// Components for ViewPorts
import Unit from "../../components/Unit"
import ViewProperties from "../../components/ViewProperties"
import LandlordControlPanel from "../../components/LandlordControlPanel"
import CreateTenant from "../../components/CreateTenant"

import "./Landlord.css";

// import API from "../../utils/API";

// page build
class Landlord extends Component {
  state = {
    WorkStation: ViewProperties,
  };
  // Landlord Navigation Functions
  changeView = newView => {
    let currentView = this.state.WorkStation;
    switch (newView) {
      case "ViewProperties":
        currentView = ViewProperties;
        break;
      case "Unit":
        currentView = Unit;
        break;
      case "CreateTenant":
        currentView = CreateTenant;
        break;

      default:
        currentView = ViewProperties;
        break;
    }
    this.setState({
      WorkStation: currentView,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-8">
            <Container>
              < this.state.WorkStation

              />
            </Container>
          </Col>
          <Col size="md-4">
            <LandlordControlPanel
              changeView={this.changeView}
            />
          </Col>
        </Row>
      </div>
    )
  }


}

export default Landlord;