import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";

// Components for ViewPorts
import Unit from "../../components/UnitForm"
import ViewProperties from "../../components/ViewProperties"
import LandlordControlPanel from "../../components/LandlordControlPanel"
import CreateTenant from "../../components/TenantDemo"
import WorkOrderLayout from "../../components/WorkOrderLayout"
import PropertyForm from "../../components/PropertyForm"


import "./Landlord.css";
// API
// const axios = require("axios");

// page build
class Landlord extends Component {

  constructor(props) {
    super(props);

    this.state = {
      WorkStation: ViewProperties,
      landlord: this.props.landlord.landlord,
      currentPropertyId: "",
      currentUnitId: ""
    }
  }

  updateLandlordAndRedirect = (landlord) => {
    console.log(landlord, "this is landlord");
    console.log("yo");

    this.setState({
      landlord,
      WorkStation: ViewProperties
    });

  }

  componentDidMount() {
    console.log(this.state.landlord)
  }
  // Landlord Navigation Functions
  changeView = (newView, id) => {
    let currentView = this.state.WorkStation;
    switch (newView) {
      case "ViewProperties":
        currentView = ViewProperties;
        break;
      case "Unit":
        currentView = Unit;
        console.log("UNIT CHANGING")
        console.log(id)
        break;
      case "CreateTenant":
        currentView = CreateTenant;
        break;
      case "PropertyForm":
        currentView = PropertyForm;
        break;
      default:
        currentView = ViewProperties;
        break;
    }
    this.setState({
      WorkStation: currentView,
      currentProperty: id
    })
  }

  render() {
    return (
      <div className="workStation">

        <Row>
          <Col size="md-8">
            <Container>
              {/* <p><font color="green">State/UserData: {this.state.UserData.firstName}</font></p> */}
              <this.state.WorkStation
                changeView={this.changeView}
                user={this.props.user}
                landlord={this.state.landlord}
                updateLandlordAndRedirect={this.updateLandlordAndRedirect}
                currentPropertyId={this.state.currentProperty}
              />
            </Container>
          </Col>
          <Col size="md-4">
            <LandlordControlPanel
              changeView={this.changeView}
            >
              <WorkOrderLayout>

              </WorkOrderLayout>
            </LandlordControlPanel>
          </Col>
        </Row>


      </div>
    )
  }
}

export default Landlord;
