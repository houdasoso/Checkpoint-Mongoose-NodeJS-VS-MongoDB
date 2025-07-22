# Checkpoint-Mongoose-NodeJS-VS-MongoDB
- **Node.js** – JavaScript runtime
- **Mongoose** – MongoDB object modeling
- **MongoDB Atlas** – Cloud database
- **dotenv** – For managing environment variables
Functionalities Explained
Each function is separated and commented inside server.js. Here's what each one does:

1. createAndSavePerson()
Purpose: Creates one person document and saves it to MongoDB.

Why: Test how .save() works.

How: Uses new Person({...}) then calls .save().

2. createManyPeople()
Purpose: Adds multiple people in one command.

Why: Demonstrates Model.create() for batch inserts.

How: Passes an array of objects to Person.create().

3. findPeopleByName(name)
Purpose: Finds all people with a specific name.

Why: Tests .find() query.

How: Person.find({ name })

4. findOneByFood(food)
Purpose: Finds one person who has a favorite food.

Why: Practice with .findOne() using array fields.

How: Person.findOne({ favoriteFoods: food })

5. findPersonById(id)
Purpose: Finds a person by their MongoDB _id.

Why: Simulates looking up by unique ID.

How: Person.findById(id)

6. findEditThenSave(id)
Purpose: Finds a person, edits their data, then saves it.

Why: Demonstrates modifying and re-saving a document.

How: findById() → push() → save()

7. findAndUpdate(name)
Purpose: Finds a person by name and updates their age.

Why: To use findOneAndUpdate() with { new: true } option.

How: Updates in one step, returns updated doc.

8. removeById(id)
Purpose: Deletes a person by their ID.

Why: Shows how to remove using _id.

How: findByIdAndRemove()

9. removeManyPeople()
Purpose: Deletes all people named "Mary".

Why: Demonstrates deleteMany() with condition.

How: Person.deleteMany({ name: "Mary" })

10. queryChain()
Purpose: Finds people who like "Burrito", sorts, limits, and filters fields.

Why: Demonstrates query helpers (find, sort, limit, select)
