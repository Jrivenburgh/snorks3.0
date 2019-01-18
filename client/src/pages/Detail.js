import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    Animal: {}
  };
  // When this component mounts, grab the Animal with the _id of this.props.match.params.id
  // e.g. localhost:3000/Animals/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getAnimal(this.props.match.params.id)
      .then(res => this.setState({ Animal: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <image>
                {this.state.Animal.Picture}
              </image>
              <h1>
                {this.state.Animal.Breed} {this.state.Animal.Type} lost near {this.state.Animal.Zip} at {this.state.Animal.date}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.Animal.Description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Animals</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
