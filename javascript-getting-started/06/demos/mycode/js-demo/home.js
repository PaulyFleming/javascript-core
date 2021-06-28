
// let price = "0";
let price = 0; //.... check the difference between these two

if (price) {
    showMessage('discounted');
} else {
    showMessage('not discounted');
}

/* 

Truthy or Falsey

falsy

false
0
"" or '' (empty strings)
null 
undefined
NaN


truthy

Everything NOT falsy

*/

/*

== VS ===

*/

if (1 === "1") {
    console.log('true');
} else {
    console.log('false');
} // evaliuates to false

if (1 == "1") {
    console.log('true');
} else {
    console.log('false');
} // evaluates to true

// because the == converts types but === does not



/*

The Ternary Operator

*/

// (condition) _ true-statement : false-statement;

let message = (price > 10) ? 'expesive' : 'cheap';
// this line is the same
// let message = price > 10 ? 'expesive' : 'cheap';

showMessage(message);

/*
For Loop
*/

for (let i = 0; i < 3; i++) {
    console.log(i);
}


/* 
While loop
*/
let count = 5;
while (count > 0) {
    console.log("count");
    console.log(count);
    count--;
}


/* 
Do while
*/

let counter = -1;

do {
    console.log("counter");
    console.log(counter);
    counter--;
} while ( counter > 0);
