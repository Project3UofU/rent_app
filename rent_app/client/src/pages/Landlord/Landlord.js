import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";

// Components for ViewPorts
import Unit from "../../components/UnitForm"
import ViewProperties from "../../components/ViewProperties"
import LandlordControlPanel from "../../components/LandlordControlPanel"
import CreateTenant from "../../components/TenantDemo"
import WorkOrderLayout from "../../components/WorkOrderLayout"


import "./Landlord.css";
// API
// const axios = require("axios");

// page build
class Landlord extends Component {

  constructor(props) {
    super(props);
    // console.log(JSON.stringify(props,0,2));
    this.state = {
      WorkStation: ViewProperties,
      UserData: {}
    }
  }
  componentDidMount() {
    let UserData = this.props.user.local;
    console.log(UserData)
    this.setState({ UserData })
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
      user: {},
    })
  }

  render() {
    return (
      <div className="workStation">

        {this.props.user.local.username ? (
          <Row>
            <Col size="md-8">
              <Container>
                {/* <h2>Your Properties:</h2> */}
                {/* <h2><font color="green">Name: {JSON.stringify(this.props)}</font></h2> */}
                {/* Check if the user exists before trying to display their username */}
                {/* <h4><font color="green">Name: {this.props.user.local.username}</font></h4> */}
                <p><font color="green">State/UserData: {this.state.UserData.firstName}</font></p>

                < this.state.WorkStation
                  changeView={this.changeView}
                  user={this.props.user}
                  key={this.props._id}

                />
              </Container>
            </Col>
            <Col size="md-4">
              <LandlordControlPanel
                changeView={this.changeView}
              />
              <WorkOrderLayout>

              </WorkOrderLayout>
            </Col>
          </Row>
        ) : (
            <h1> Please Log in</h1>
          )}

      </div>
    )
  }
}

export default Landlord;