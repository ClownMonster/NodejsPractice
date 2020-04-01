const EventEmitter = require('events'); // this is in ES5 . ES6 methods can also be used

const EE = new EventEmitter(); // EE is an instantaneous object of class EventEmitter

EE.on('test1',(n1,n2) =>{
    console.log(n1+n2);
});

EE.emit('test1',4,6);
