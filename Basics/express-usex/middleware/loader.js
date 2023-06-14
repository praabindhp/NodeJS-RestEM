function load(req, res, next) {
  console.log("Loading...");
  next();
}

module.exports = load;
