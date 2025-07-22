require('dotenv').config();
const mongoose = require('mongoose');

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
  run(); // Run one function to test
}).catch(err => console.error("❌ Connection error:", err));

// ✅ Schema and Model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
const Person = mongoose.model('Person', personSchema);

// ✅ 1. Create and Save One Person
const createAndSavePerson = async () => {
  try {
    const person = new Person({
      name: 'Alice',
      age: 24,
      favoriteFoods: ['Tacos', 'Sushi'],
    });
    const saved = await person.save();
    console.log("✅ Saved person:", saved);
  } catch (err) {
    console.error("❌ Error saving:", err);
  }
};

// ✅ 2. Create Many People
const arrayOfPeople = [
  { name: "Bob", age: 22, favoriteFoods: ["Burger"] },
  { name: "Mary", age: 30, favoriteFoods: ["Pasta"] },
  { name: "Steve", age: 40, favoriteFoods: ["Burrito", "Steak"] },
];
const createManyPeople = async () => {
  try {
    const data = await Person.create(arrayOfPeople);
    console.log("✅ Created many people:", data);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 3. Find People by Name
const findPeopleByName = async (name) => {
  try {
    const data = await Person.find({ name });
    console.log(`✅ Found people named ${name}:`, data);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 4. Find One Person by Favorite Food
const findOneByFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log(`✅ Found one person who likes ${food}:`, data);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 5. Find by ID
const findPersonById = async (personId) => {
  try {
    const data = await Person.findById(personId);
    console.log("✅ Found person by ID:", data);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 6. Find, Edit, then Save
const findEditThenSave = async (personId) => {
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push("hamburger");
    const updated = await person.save();
    console.log("✅ Updated person:", updated);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 7. Find and Update
const findAndUpdate = async (name) => {
  try {
    const updated = await Person.findOneAndUpdate(
      { name },
      { age: 20 },
      { new: true }
    );
    console.log("✅ Updated age:", updated);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 8. Remove by ID
const removeById = async (personId) => {
  try {
    const removed = await Person.findByIdAndRemove(personId);
    console.log("✅ Removed person:", removed);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 9. Remove Many
const removeManyPeople = async () => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    console.log("✅ Removed Marys:", result);
  } catch (err) {
    console.error(err);
  }
};

// ✅ 10. Chain Search Query Helpers
const queryChain = async () => {
  try {
    const data = await Person.find({ favoriteFoods: "Burrito" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age");
    console.log("✅ Query chain result:", data);
  } catch (err) {
    console.error(err);
  }
};

// 🧪 Run one function at a time to test
async function run() {
  // await createAndSavePerson();
  // await createManyPeople();
  // await findPeopleByName("Bob");
   await findOneByFood("Pasta");
  // await findPersonById("put_valid_id_here");
  // await findEditThenSave("put_valid_id_here");
  // await findAndUpdate("Bob");
  // await removeById("put_valid_id_here");
  // await removeManyPeople();
  // await queryChain();
}
