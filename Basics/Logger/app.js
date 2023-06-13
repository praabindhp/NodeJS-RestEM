// Class: EventEmitter
const EventEmitter = require('events');

// Object: emitter
// const emitter = new EventEmitter();
// Already Used In logger.js By Class Logger

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

logger.log('Message From Praabindh');