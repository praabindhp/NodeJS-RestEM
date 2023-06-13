// Class: EventEmitter
const EventEmitter = require('events');

// Object: emitter
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

const log = require('./logger');
log('message');