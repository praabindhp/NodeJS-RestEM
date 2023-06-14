const express = require("express");
const router = express.Router();
const Joi = require("joi");

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

// Access The Courses Array

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The Course 🛋 With The Given 🆔 Was ❌ Found");
  res.send(course);
});

// POST Requests

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;
