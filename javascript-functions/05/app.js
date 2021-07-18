'use strict';
function space() {
    console.log('');
}

// Default Parameters
// default param must come AFTER the regular params
console.log('Default Parameters:')

function sayHi(name = 'World') {
    console.log('Hello ' + name);
}
sayHi();
sayHi('Jimmy');

space();

function sayHello(message, name = 'World') {
    console.log(message + name);
}
sayHello('Howdy ');
sayHello('Wassup ', 'Billy');

space();
console.log('Rest Params:')
space();

// Rest Parameters
function greet(...names) {
    names.forEach(name => console.log('Hi ' + name));
}
greet('Jimmy', 'Joe', 'Frank', 'Wilma');
space();
greet('Billy', 'Joseph', 'Frank', 'Wilma', 'Sammy', 'Welmeester');
space();

function greeting(message, ...names) {
    console.log(message + " everyone");
    names.forEach(name => console.log("Hey " + name));
}
greeting('Welcome, ', 'Jimmy', 'Joe', 'Frank', 'Wilma');
space();
greeting('Jimmy', 'Joe', 'Frank', 'Wilma'); // need to be careful with rest params + regular params
space();

// Spread Operator
console.log('Spread:');
space();

function greetSpread(person1, person2) {
    console.log('Hello ' + person1 + ' and ' + person2);
}
let names = ['JOhn', 'Mary'];
greetSpread(...names);
space();

function display(char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4)
}
let letters = 'abcd';
display(...letters);


