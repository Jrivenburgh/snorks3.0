const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Animals collection and inserts the AnimalS below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/HaveYouSeenMyAnimal"
);

const AnimalSeed = [
  {
    Type: "Cat",
    Breed: "American Shorthair",
    Description:
      "All gray with yellow eyes. Very Friendly",
    Zip: 92111,
    Picture: "https://www.pets4homes.co.uk/images/articles/2802/the-difference-between-a-british-and-american-shorthair-cat-553ab59f2be7d.jpg",
    date: new Date(Date.now())
  },
  {
    Type: "Dog",
    Breed: "Golden Retriever",
    Description:
      "All golden with hazel eyes. Very Friendly, responds to Doggo",
    Zip: 92112,
    Picture: "https://vetstreet.brightspotcdn.com/dims4/default/d742db0/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2Fd98250a0d311e0a2380050568d634f%2Ffile%2FGolden-Retriever-3-645mk062411.jpg",
    date: new Date(Date.now())
  },
 
];

db.Animal
  .remove({})
  .then(() => db.Animal.collection.insertMany(AnimalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
