const express = require("express");
const app = express();
const logger = require("./logger");
const loader = require("./loader");
const Joi = require("joi"); // Class : Joi
const load = require("./loader");

// Middle Ware Functions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(loader);
app.use(logger);

app.use(function(req, res, next){
  console.log('Authenticating...');
  next();
});

// Constants

const courses = [
  {
    id: 1,
    name: "Python Full-Stack Course",
  },
  {
    id: 2,
    name: "The Ultimate C++ Course",
  },
  {
    id: 3,
    name: "The HTML5 & CSS3 Course",
  },
  {
    id: 4,
    name: "Complete JavaScript Course",
  },
  {
    id: 5,
    name: "Complete NodeJS Course",
  },
];

// GET Requests
// Direct URLs

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/numbers", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

app.get("/api/users", (req, res) => {
  res.send(["Praabindh", "Pradeep", "Bindhu", "Jai", "Prathyush"]);
});

// Dynamic URLs With Parameters

app.get("/api/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/users/:firstName/:lastName", (req, res) => {
  res.send(req.params);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

// Access The Courses Array

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The Course 🛋 With The Given 🆔 Was ❌ Found");
  res.send(course);
});

// POST Requests

app.post("/api/courses", (req, res) => {
  // Validation
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });

  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) {
    // 400 Bad Request
    res.status(400).send(result.error.details[0].message);
    return;
  } else {
    console.log(result);
  }

  //   // Traditional Validation
  //   if (!req.body.name || req.body.name.length < 5) { // 400 Bad Request
  //     res.status(400).send("Name Is Required & Should Be Minimum 5 Characters");
  //     return;
  //   }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// PUT Requests

app.put("/api/courses/:id", (req, res) => {
  // Look For The Course
  // If Not Existing, Return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The Course 🛋 With The Given 🆔 Was ❌ Found");

  // Validate
  // If Invalid, Return 400 - Bad Request
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    // 400 Bad Request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Update The Course
  course.name = req.body.name;
  // Return The Updated Course
  res.send(course);
});

// DELETE Requests
app.delete("/api/courses/:id", (req, res) => {
  // Look For The Course
  // If Not Existing, Return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The Course 🛋 With The Given 🆔 Was ❌ Found");

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return The Same Course
  res.send(course);
});

// Environment Variable

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On 🛳  Port ${port}...`));
