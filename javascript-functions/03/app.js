//Arrow functions
// shorter syntax & more readable
// but do not substitute regular functions
// "this" behaves differently in arrow functions
// No arguement object


// Regular function
let greetings = function() {
    return 'Hello World!';
}
let message = greetings();
console.log(message);

// Arrow function of above
let greetings1 = () => {
    return 'Hello World!';
}
let message1 = greetings1();
console.log(message1);

// can be refactored further like this:
let greetings2 = () => 'Hello World!';
let message2 = greetings2();
console.log(message2);

//Regular Function 2
let greet = function greetings3(name) {
    return 'Hello ' + name;
}
let message3 = greet('John');
console.log(message3);

// Arrow function
let greetings4 = name => 'Hello ' + name;
let message4 = greetings4('John');
console.log(message4);

// Regular function 3
function sum(num1, num2) {
    return num1 + num2;
}

let output = sum(10, 5);
console.log(output);

//Arrow function
let sum1 = (num1, num2) => num1 + num2;
let output1 = sum1(10, 5);
console.log(output1);

// this
// arrow functions inherit this from enclosing scope
// as they do not have their own this
let myMessage = {
    name: 'John',
    regularFunction: function() {
        console.log(this);
        console.log('Hello ' + this.name);
    },
    arrowFunction: () => console.log('Hi ' + 
    this.name)
 }

 myMessage.regularFunction();
 myMessage.arrowFunction();