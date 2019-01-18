import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Animals extends Component {
  state = {
    Animals: [],
    Type: "",
    Breed: "",
    Description: ""
  };

  componentDidMount() {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API.getAnimals()
      .then(res =>
        this.setState({ Animals: res.data, Type: "", Breed: "", Description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteAnimal = id => {
    API.deleteAnimal(id)
      .then(res => this.loadAnimals())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Type && this.state.Breed) {
      API.saveAnimal({
        Type: this.state.Type,
        Breed: this.state.Breed,
        Description: this.state.Description
      })
        .then(res => this.loadAnimals())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Have You Seen My Animal?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.Type}
                onChange={this.handleInputChange}
                name="Type"
                placeholder="Type (required)"
              />
              <Input
                value={this.state.Breed}
                onChange={this.handleInputChange}
                name="Breed"
                placeholder="Breed (required)"
              />
              <Input
                value={this.state.Zip}
                onChange={this.handleInputChange}
                name="Zip"
                placeholder="Zip (required)"
              />
              <Input
                value={this.state.Picture}
                onChange={this.handleInputChange}
                name="Picture"
                placeholder="Picture (Optional)"
              />
              <TextArea
                value={this.state.Description}
                onChange={this.handleInputChange}
                name="Description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.Breed && this.state.Type)}
                onClick={this.handleFormSubmit}
              >
                Submit Animal
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Animals On My List</h1>
            </Jumbotron>
            {this.state.Animals.length ? (
              <List>
                {this.state.Animals.map(Animal => (
                  <ListItem key={Animal._id}>
                    <Link to={"/Animals/" + Animal._id}>
                    <image> 
                      {Animal.Picture}
                    </image>
                      <strong>
                        {Animal.Breed}  {Animal.Type} lost near {Animal.Zip} at {Animal.date}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAnimal(Animal._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Animals;
