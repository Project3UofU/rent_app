import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./NoMatch.css"

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <div className="container">
          
          <div className="card xl-dark text-white">
            <img className="card-img" src="./images/jose-alonso-382321-unsplash.jpg" id="no-match-image" alt="404" />
            <div className="card-img-overlay">
            <iframe src="https://giphy.com/embed/5ftsmLIqktHQA" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/no-jurassic-park-dennis-nedry-5ftsmLIqktHQA"></a></p>
              <h1 className="display-1 card-title">404 </h1>
              <h1 className="">PAGE NOT FOUND</h1>
              <h4 className="card-text">Sorry, The page you are trying to reach is currently unavailable.
                </h4>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
