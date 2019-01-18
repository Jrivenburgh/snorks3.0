import axios from "axios";

export default {
  // Gets all Animals
  getAnimals: function() {
    return axios.get("/api/Animals");
  },
  // Gets the Animal with the given id
  getAnimal: function(id) {
    return axios.get("/api/Animals/" + id);
  },
  // Deletes the Animal with the given id
  deleteAnimal: function(id) {
    return axios.delete("/api/Animals/" + id);
  },
  // Saves a Animal to the database
  saveAnimal: function(AnimalData) {
    return axios.post("/api/Animals", AnimalData);
  }
};
