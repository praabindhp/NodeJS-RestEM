(function (exports, require, module, __filename, __dirname) {
  // The Functional Codes
  console.log(__filename);
  console.log(__dirname);

  var url = "http://praabindhp.com";

  function log(message) {
    // Send an HTTP request
    console.log(message);
  }

  module.exports = log;

});
