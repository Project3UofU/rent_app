import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./NoMatch.css"

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div className="container">
          <iframe src="https://giphy.com/embed/5ftsmLIqktHQA" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/no-jurassic-park-dennis-nedry-5ftsmLIqktHQA">via GIPHY</a></p>
          <div className="card xl-dark text-white">
            <img className="card-img" src="./images/jose-alonso-382321-unsplash.jpg" id="no-match-image" alt="404" />
            <div className="card-img-overlay">
              <h1 className="display-1 card-title">404 </h1>
              <h1 className="">PAGE NOT FOUND</h1>
              <p className="card-text">Sorry, The page you are trying to reach is currently unavailable.
                </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
