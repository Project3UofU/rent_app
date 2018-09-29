import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";
// Components for ViewPorts
import Unit from "../../components/Unit"
import ViewProperties from "../../components/ViewProperties"
import LandlordControlPanel from "../../components/LandlordControlPanel"
import CreateTenant from "../../components/TenantDemo"

import "./Landlord.css";

// import API from "../../utils/API";

// page build
class Landlord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      WorkStation: ViewProperties,
    }
  }

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
              <h2><font color="green">Name: {JSON.stringify(this.props)}</font></h2>
              {/* Check if the user exists before trying to display their username */}
              {/* <h4><font color="green">Name: {this.props.user.local.username}</font></h4> */}
              < this.state.WorkStation
                user={this.props.user}
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