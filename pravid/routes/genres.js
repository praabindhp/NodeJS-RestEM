const express = require("express");
const router = express.Router();
const Joi = require("joi");

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Thriller" },
  { id: 6, name: "Sci-Fi" },
  { id: 7, name: "Drama" },
  { id: 8, name: "Adventure" },
  { id: 9, name: "Crime" },
  { id: 10, name: "Mystery" },
  { id: 11, name: "Animation" },
  { id: 12, name: "Fantasy" },
  { id: 13, name: "Family" },
  { id: 14, name: "Biography" },
  { id: 15, name: "History" },
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.post("/", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = { id: genres.length + 1, name: req.body.name };
  genres.push(genre);
  res.send(genre);
});

router.put("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(400).send("The 🎥 Genre With Given 🆔 Was Not ❌ Found");

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre)
    return res.status(400).send("The 🎥 Genre With Given 🆔 Was Not ❌ Found");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  if (!genre) res.status(404).send("The 🎥 Genre With Given 🆔 Was Not ❌ Found");
  res.send(genre);
});

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

module.exports = router;
