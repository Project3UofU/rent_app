import React, { Component } from "react";
// layouts:
import { Col, Row, Container } from "../../components/Grid";
// Components for ViewPorts
import Unit from "../../components/Unit"
import ViewProperties from "../../components/ViewProperties"

import "./Landlord.css";

// import API from "../../utils/API";

// page build
class Landlord extends Component {
    state= {
       WorkStation : ViewProperties,
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
 
        default:
          break;
      }
       this.setState({
         WorkStation : currentView,
       })
    }
    
    render() {
      return(
        <div>
          <Row>
            <Col size="md-8">
              <Container>
                < this.state.WorkStation />
              </Container>
            </Col>
            <Col size="md-4">
              <Container>
                <Row>
                  <Col size= "md-12">
                    <h1>Different Container.. Test</h1>
                    <h2>Place Newsfeed and form here</h2>
                    <button type="button" onClick = {() => this.changeView("Unit")} className="btn btn-primary">New Unit</button>
                    <button type="button" onClick = {() => this.changeView("ViewProperties")} className="btn btn-primary">View Properties</button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      )
    }


}

export default Landlord;