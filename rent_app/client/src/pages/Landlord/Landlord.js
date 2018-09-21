import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

// import API from "../../utils/API";

// page build
class Landlord extends Component {
    state= {
        user_auth: false,
        show_pet_form: false,
    };

    // functions
    handleFormSubmit = event => {
        event.preventDefault();
        // API to Save Data
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render() {
      return(
        <div>
          <Container>
            <Row>
              <Col size= "md-12">
                <h1>Different Container.. Test</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col size="md-12">
                <form>
                  <Input
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                    name="First Name"
                    placeholder="First Name (required)"
                   />  
                   <Input
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                    name="Last Name"
                    placeholder="Last Name (required)"
                   /> 
                   <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="Email"
                    placeholder="email@yourewebsite.com (required)"
                   />     
                   <FormBtn>Submit</FormBtn>            
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }


}

export default Landlord;