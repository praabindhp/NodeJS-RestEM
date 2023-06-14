const express = require("express");
const router = express.Router();

router.get("/api/users", (req, res) => {
  res.send(["Praabindh", "Pradeep", "Bindhu", "Jai", "Prathyush"]);
});

// Dynamic URLs With Parameters

router.get("/api/users/:id", (req, res) => {
  res.send(req.params.id);
});

router.get("/api/users/:firstName/:lastName", (req, res) => {
  res.send(req.params);
});

module.exports = router;