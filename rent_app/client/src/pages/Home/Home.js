import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid"
import "./home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    }
  }
  Home = props => {
    if (props.user) {
      return (
        console.log(JSON.stringify(props))
      )
    } else {
      return (
        console.log(JSON.stringify(props))
      )
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="sm-12">
            <Container className="intro">
              <Row>
                <Col size="md-6">
                  <div className="test">
                    <img src="images/RentKeeper-01.png" id="frontImg" className="img-fluid" alt="RentKeeper" />
                  </div>
                </Col>
                <Col size="md-6">
                  <h1>Welcome to Rent Keeper!</h1>
                  <h3>Your new property management web-app</h3>
                  <hr />
                  <p>RentKeeper.net allows you to manage your Properties, Tenants, and work orders all in one convenient app.</p>
                </Col>
              </Row>
            </Container>
            <Row>
              <Container className="noBackground">
                <h3>Benefits of Rent Keeper:</h3>
                <Row>

                  <Col size="md-4">

                    <Container>

                      <ul className=" lowerCase">
                        <li> Using Rent Keeper, Landlords have complete and reliable access to information about current tenants as well as up to the minute information about the availability of vacant units, unpaid rent, work orders etc. Totally free of charge.</li>
                      </ul>
                    </Container>
                  </Col>
                  <Col size="md-4">
                    <Container>
                      <img src="images\jose-alonso-382321-unsplash.jpg" id="firstImg" className="img-fluid" alt="RentKeeper" />
                    </Container>
                  </Col>
                  <Col size="md-4">
                    <Container>
                      <ul className="lowerCase">
                        <li>Access detailed and clear reporting which allows you as a landlord to always have accurate and up to date information about the state of affairs at each of your properties. Thus assisting with making informed, timely and effective management decisions.</li>
                      </ul>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Row>

          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Container>
              <Row>
                <Col size="md-6">
                  <Container>
                    <p>Main functions of RentKeeper:</p>
                    <ul className="align-left lowerCase">
                      <li>Database of all properties</li>
                      <li>Rent payments and calculations (future)</li>
                      <li>Database of all tenant documents</li>
                      <li>Database of property information (past work orders, current work orders, future projects etc.)</li>
                      <li>Up to date database of accounting and expenses.</li>
                    </ul>
                  </Container>
                </Col>
                <Col size="md-6">
                  <Container>
                    <p>Reporting and Notifications:</p>
                    <ul className="align-left lowerCase">
                      <li>Up to date information on vacant properties.</li>
                      <li>Up to date information on rent payments.</li>
                      <li>Automatic notifications of terminating contracts, unpaid rent, the need for billing and other events. (future)</li>
                      <li>E-mail and SMS sending to the tenant database (future</li>
                    </ul>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Container>
                  <div className="lowerCase align-left">
                    <p>Why use Rent Keeper: (testimonials)</p>
                    <p>Using Rent Keeper for property management your accounting and efficiency will significantly improve. Save time, money and energy which can be used to solve additional problems while at the same time improving the speed and quality of communications with your tenants.</p>

                    <p>Detailed reports for managers will provide up-to-date and reliable information about the state of affairs at each property, which will allow making timely and correct management decisions.</p>
                    <p>Thus, working with Rent Kepeer will help to increase the efficiency and quality of customer service, reduce costs and increase the profit of your organization.</p>
                  </div>
                </Container>

              </Row>

              <p>
              </p>
            </Container>
          </Col>

        </Row>
      </div >
    );
  }
}


export default Home;
