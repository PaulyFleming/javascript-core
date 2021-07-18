//Function Context

function sayHi() {
    console.log('Hi');
    console.log(this);
}

sayHi(); // this gives us the global window

let greeting = {}; // declare empty object
greeting.sayHi1 = function() { //assign 'greeting' variable to annonymous function
    console.log('Hi');
    console.log(this);
}

greeting.sayHi1(); // this is now the value of the object reffered to be the 'greeting' variable

//using a constructor function:
function sayHi2() {
    console.log('Hi');
    console.log(this);
}

let greeting1 = new sayHi2(); // this here is an empty object (created by the constructor)


// call Method

let person1 = {name: 'John', age: 22}
let person2 = {name: 'Mary', age: 26}
let sayHi3 = function() {
    console.log('Hi, ' + this.name);
}

sayHi3(); // window object has no property 'name', so we only get: "Hi, "
sayHi3.call(person1); // call binds the value of this to the 'person1' object here
sayHi3.call(person2);

// can pass additional args to the call method:

let person3 = {name: 'Johnny', age: 22}
let sayHi4 = function(message) {
    console.log(message + ', ' + this.name);
}
sayHi4.call(person3, 'Wassup');


// apply()
// works like call methid but takes an array of args rather than a list
//                    VS
//   apply()          |     call()
// array input        |  individual args 
// w similar elements |  of varying type
console.log('');
console.log('apply()');
console.log('');

function introduction(name, profession) {
    console.log('My name is ' + name + ' and I am a ' + profession + '.');
    console.log(this);
}
introduction('John', 'student');
introduction.apply(undefined, ['Mary', 'Lawyer']);
introduction.call(undefined, 'James', 'artist');
// note: all output ^here^ is the same, but the args used to call are different


// bind()
// (create a copy of a function and then change the value of this)
console.log('');
console.log('bind()');
console.log('');

let person4 = {name: 'Mary',
                getName: function(){
                    return this.name;
                }
};
let person5 = {name: 'John'};
let getNameCopy = person4.getName.bind(person5);
console.log(getNameCopy());
// so here we created a copy of the function and then applied the new values


// BUilt-in functions
console.log('');
console.log('built-in functions:');
console.log('');

//eval
console.log('eval');
// accepts a string as input, evaluates it and returns a value
let x = 1;
let y = 2;
let z = 'abc';
console.log(eval('x + y + 20'));
console.log(eval('x + y + z')); // returns a string of the number & string concatenated together

// parseInt
console.log('');
console.log('parseInt');
console.log(parseInt('F', 16)); // returns value of F in base 16
console.log(parseInt('15', 10)); // returns value in base 10
console.log(parseInt('Hi')); // Nan
console.log(parseInt('9898')); // returns standard decimal

// parseFloat
console.log('');
console.log('parseFloat');
console.log(parseFloat('3.99'));
console.log(parseFloat(3.99));
console.log(parseFloat('3.99e+1'));
console.log(parseFloat('3.99e-1'));
console.log(parseFloat('3.14some non-digit characters'));
console.log(parseFloat(''));

//escape
console.log('');
console.log('escape');
console.log(escape('abc123'));
console.log(escape('äöü'));
console.log(escape('ć'));
console.log(escape('@*_+-./'));

// unescape
console.log('');
console.log('unescape');
console.log(unescape('abc123'));
console.log(unescape('%E4%F6%FC'));
console.log(unescape('%u0107'));








