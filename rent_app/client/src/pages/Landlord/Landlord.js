import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";

// Components for ViewPorts
import Unit from "../../components/Unit"
import ViewProperties from "../../components/ViewProperties"
import LandlordControlPanel from "../../components/LandlordControlPanel"
import CreateTenant from "../../components/CreateTenant"
// CSS
import "./Landlord.css";
// API
// import API from "../../../../routes/index"
const axios = require("axios");


// page build
class Landlord extends Component {
  state = {
    WorkStation: ViewProperties,
    //Landlord's info:
    username: "",
    properties: [],

    workOrders: [],
  };
  componentDidMount() {
    this.loadLandLord();
  }
  loadLandLord = () => {
    // TODO:  Need tofind right API...
    axios.get("")
      .then(res =>
        this.setState({
          username: res.username,
          properties: res.properties,
          units: res.units,
          workorders: res.workorders,
          tenants: res.tenants
        }))
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
              < this.state.WorkStation
                properties={this.properties}
                tenants={this.tenants}
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