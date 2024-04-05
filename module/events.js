var events = require("events");

// It helps to aquire something from other objects
var util = require('util');

// Element.on('click', function(){});   "It is the basic syntax of an event listener";

// It is the way we define an event emitter
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(message) {
    console.log(`Varun has given you the message ${message}`);
});

myEmitter.emit('someEvent', 'hello');

// second example 
// defining a constructor


var person = function(name){
    this.name = name;
};

util.inherits(person, events.EventEmitter);

var varun = new person('varun');
var taniya = new person('taniya');
var shivam = new person('shivam');

var persons = [varun, taniya, shivam];

persons.forEach((person) => {
    person.on('speak', (mssg)=>{
        console.log(`${person.name} you have got this message ${mssg}`);
    })
})

varun.emit('speak', 'hello bablu');
