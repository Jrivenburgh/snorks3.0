const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  Type: { type: String, required: true },
  Breed: { type: String, required: true },
  Description: String,
  Zip: { type: Number, required: true },
  Picture: String, 
  date: { type: Date, default: Date.now }
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
