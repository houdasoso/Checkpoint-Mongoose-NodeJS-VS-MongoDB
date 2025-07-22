// personModel.js
const mongoose = require('mongoose');

// Define Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Create Model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
