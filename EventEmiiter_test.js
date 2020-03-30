const EventEmitter = require('events');

const EE = new EventEmitter();

EE.on('test1',(n1,n2) =>{
    console.log(n1+n2);
});

EE.emit('test1',4,6);