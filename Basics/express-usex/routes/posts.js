const express = require("express");
const router = express.Router();

router.get("/:year/:month", (req, res) => {
    res.send(req.query);
  });

module.exports = router;