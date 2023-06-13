// Class: EventEmitter
const EventEmitter = require("events");

// Object: emitter
// const emitter = new EventEmitter();
// Already Used In app.js By Class Logger

var url = "http://praabindhp.com";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise An Event
    this.emit("messageLogged", { id: 1, url: "http://praabindhp.com" });
  }
}

module.exports = Logger;