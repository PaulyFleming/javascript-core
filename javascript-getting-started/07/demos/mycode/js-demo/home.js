
let i = -4;
do {
    console.log(i);
    i--;
} while (i > 0);

// Two ways to define functions:

// Function Declaration
function logMessage() {
    console.log('Here is a message');
}

logMessage(); // call the function


// Function Expression
let fn = function() {     // note - no function name
    console.log("Here's another message");
}

fn(); // call the var instead of the function name

// for best practice add a name to the function for debugging purposes
let myFn = function loggingFunction() {     
    console.log("Here's a third message");
}

myFn(); // you still use the var to call the function. The
        // function name will not work. It's only for debugging


// Parameters
let parameterExampleFn = function (firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
}

parameterExampleFn('Paul', 'Chaloola');

// Info out of functions

function getSecretCode(value) {

    let code = value * 42;
    return code;
}

let secretcode = getSecretCode(2);
showMessage(secretcode);


// Function scope

let key = 100;

function scopeExampleFn(value) {

    let keyGenerator = function() {
        let key = 10;
        console.log('key in keyGenerator = ', key);
        console.log('value in keyGenerator = ', value);
        return key;
    }

    let code = value * keyGenerator();
    console.log('key in scopeExampleFn = ', key);
    console.log('value is scopeExampleFn = ', value);
    return code;
}

let secretcode2 = scopeExampleFn(10);
showMessage(secretcode2);

changePercentOff(secretcode);