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
                <Col size="md-3">
                  <div className="test">
                    <img src="images/RentKeeper-01.png" id="frontImg" className="img-fluid" alt="RentKeeper" />
                  </div>
                </Col>
                <Col size="md-9">
                  <h1>Welcome to Rent Keeper!</h1>
                  <h4>Your One Stop Property Management Solution</h4>
                  <hr />
                  {/* <p>RentKeeper.net allows property managers and investors to manage their Properties and Tenants all in one convenient application</p> */}
                </Col>
              </Row>
            </Container>
            <Row>
              <Container className="noBackground">
                <h1>Benefits of Rent Keeper</h1>
                <Row>

                  <Col size="md-4">

                    <Container>
                      <div className=" lowerCase">
                        <p> Using Rent Keeper, Landlords have complete and reliable access to information about current tenants as well as up to the minute information about the availability of vacant units, unpaid rent, work orders etc. Totally free of charge.</p>
                      </div>
                    </Container>
                  </Col>
                  <Col size="md-4">
                    <Container>
                      <img src="images\jose-alonso-382321-unsplash.jpg" id="firstImg" className="img-fluid" alt="RentKeeper" />
                    </Container>
                  </Col>
                  <Col size="md-4">
                    <Container>
                      <div className="lowerCase">
                        <p>Access detailed and clear reporting which allows you as a landlord to always have accurate and up to date information about each of your properties. Assisting with making informed, timely and effective management decisions.</p>
                      </div>
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
                    <h3>Main functions of RentKeeper</h3>
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
                    <h3>Reporting and Notifications</h3>
                    <ul className="align-left lowerCase">
                      <li>Access or create work orders.</li>
                      <li>Access up to date information about vacant properties.</li>
                      <li>Access up to date information on rent payments.</li>
                      <li>Automatic notifications of terminating contracts, unpaid rent, the need for billing and other events. (future development)</li>
                      <li>E-mail and SMS to send notifications to tenants (future development)</li>
                    </ul>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Container>
                  <div className="align-center">
                    <h3>Why use Rent Keeper?</h3>
                    <ul className="align-left lowerCase">
                    <li>Using Rent Keeper for property management your accounting and efficiency will significantly improve. </li>
                    <li>Save time, money and energy which can be used to solve additional problems while improving the speed and quality of communications with your tenants.</li>
                    <li>Access detailed reports for property managers with up-to-date and reliable information about each unit or property.</li>
                    <li>Using Rent Keeper as your property management solution will help increase the efficiency and quality of customer service, reduce costs and increase the profit of your organization.</li>
                    </ul>
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
