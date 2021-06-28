/*
Numbers
*/
let price = 12,
    taxRate = 0.07;
price += 10;

showMessage(price * taxRate);

// Note the difference between these two lines:
console.log(price++); // this line increments after price is shown in DOM
console.log(++price);


/* 
Operator Precedence

Be careful what order you put operations in:

eg:

let price = 3 + 2 * 2;

this equals 7

But:

let price = (3 + 2) * 2;

this equals 10

Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/

/* 

Negative Numbers

these work like they do in maths class, but for clarity
the following:

let amount = 20 - -2;

should be written as:

let amount = 20 - (-2);

*/

/*
Strings
*/

let message = "Hello World!";

showSecondMessage(message);
// showSecondMessage(message.length);
// showSecondMessage(message.toUpperCase());
// showSecondMessage(message.toLowerCase());

/*
Convert number to string
*/

price = price.toString();

showMessage(typeof price);

/* 
Convert String to number
*/

let amount = Number.parseFloat("123.34");

showSecondMessage(typeof amount);


/*
Objects
*/

let person = {
    firstName: 'Paul',
    lastName: 'Fleming'
};
showMessage(typeof person);
showSecondMessage(person.lastName);