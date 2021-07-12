'use strict';

// for/in loop
function forinSample() {
    //create an object
    let product = {
        'productID': 987654,
        'name': 'Hairy Monkey Banana Fish',
        'productNumber': '3232',
        'color': 'red',
        'standardCost': 1345.55,
        'listPrice': 1654.44,
        // object contains a function
        calculateGrossProfit: function () {
            return this.listPrice - this.standardCost;
        }
    };

    for (const i in product) {
        console.log("The key for this object item is: " + i);
    };

    for (const value in product) {
        console.log("This object items value is: " + value);
    };

    for (const key in product) {
        console.log("Now combine the two in readable format");
        console.log("'" + key + "'=" + product[key]);
    };

};


//create an array of objects
let products = [{
        "productID": 680,
        "name": "HL Road Frame - Black, 58",
        "productNumber": "FR-R92B-58",
        "color": "Black",
        "standardCost": 1059.31,
        "listPrice": 1431.50
    },
    {
        "productID": 707,
        "name": "Sport-100 Helmet, Red",
        "productNumber": "HL-U509-R",
        "color": "Red",
        "standardCost": 13.08,
        "listPrice": 34.99
    },
    {
        "productID": 709,
        "name": "Mountain Bike Socks, M",
        "productNumber": "SO-B909-M",
        "color": "White",
        "standardCost": 3.3963,
        "listPrice": 9.50
    }
];

// for/of loop

function forofSample() {
    // loop over the array & print each item
    for (const item of products) {
        console.log(item);
    };;

    // loop over the array & print each item as JSON
    for (const i of products) {
        console.log("Now let's return results as JSON:");
        console.log(JSON.stringify(i));
    }
};

// loop over a string
function loopStringSample() {
    let productName = "Big brown fox jumps";
    let letters = "";

    for (const char of productName) {
        letters += char;
        // print here to show the iteration
        console.log(letters);
    };
    console.log(" Final Result: " + letters);
};

// Note: continue statement skips lines where neccesary
// BUt it continues on. Unlike Break. Break stops once 
// the break statement is fulfilled. Continue goes back to 
// the loops beginning

// break out of a loop
function breakSample() {
    for (const item of products) {
        if (item.listPrice < 25) {
            break;
        }
        console.log(JSON.stringify(item));
        console.log(products[item]);
        console.log(item);
    };
};

/* Note the difference between this:

function breakSample() {
    for (const item in products) {
        if (item.listPrice < 25) {
            break;
        }
        console.log(JSON.stringify(item));
        console.log(products[item]);
        console.log(item);
    };
};

*/

// Continue statement:

function continueSample() {
    for (const value of products) {
        if (value.standardCost > 1000) {
            continue;
        };
        console.log(JSON.stringify(value));
    };
};

// Use of a label.
// NOTE: I don't recommend use of labels as this leads to spaghetti code
function labelSample() {
    even: for (let index = 1; index <= 10; index++) {
        if (index % 2 == 1) {
            continue even;
        }
        console.log(index);
    }
}