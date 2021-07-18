// simple function
function greeting(name) {
    console.log('Hello '  + name);
}

greeting('Paul');

// use return in a function
function greetings() {
    return('Hello Paul');
}
let message = greetings();
console.log(message);


// Arguement is a value we pass to a function when we call it
//    VS
// Parameter is a variable listed as part of a functions definition

function sum(num1, num2) { // has 2 parameters
    return num1 + num2;
}
let result = sum(2, 3); // pass arguements 2 & 5 to function
console.log(result);

console.log(""); // create space

// The Arguements Object
// let's us use an indefinite number of args like an array

function printAll() {
    for(let i =0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5);
printAll(100, 300);


// Closures
// return variables from a function (when otherwise it'd be out of scope)

let myGreeting = (function() {
    let message = "Hello";
    let getMessage = function() {
        return message;
    };
    return {
        getMessage : getMessage,
    };
})();
console.log(myGreeting.getMessage());

function setupCounter( val ) {
    return function counter() {
        return val++;
    }
}
let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());
let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter1());


