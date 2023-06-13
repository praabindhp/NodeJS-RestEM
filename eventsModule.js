// Class: EventEmitter
const EventEmitter = require('events');

// Object: emitter
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

// Raise An Event
emitter.emit('messageLogged', { id: 1, url: 'http://praabindhp.com' });