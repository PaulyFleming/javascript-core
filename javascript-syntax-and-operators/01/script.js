let idBtn = document.getElementById('idBtn');
let colorBtn = document.getElementById('colorBtn');
let noBreakBtn = document.getElementById('noBreakBtn');

idBtn.addEventListener('click', simpleSwitch);
colorBtn.addEventListener('click', multiSwitch);
noBreakBtn.addEventListener('click', breakSwitch);

function simpleSwitch() {
    let productId = 7;

    switch(productId) {
        case 1:
            console.log("Product 1");
            break;
        case 2:
            console.log("Product 2");
            break;
        default:
            console.log("Unknown Product");
            break;
    }
};


function multiSwitch() {
    let color = "Red";

    switch(color) {
        case "Red":
        case "Green":
            console.log("The color is red");
            break;
        case "Blue":
        case "Yellow":
        case "Purple":
            console.log("The color is not red");
            break;
        default:
            console.log("Other");

    }
};

function breakSwitch() {
    let color = "Pink";

    switch(color) {
        case "Red":
        case "Green":
            console.log("The color is red");
            break;
        case "Blue":
        case "Yellow":
        case "Purple":
            console.log("The color is not red");
            break;
        case "Orange":
        case "Pink":
            console.log("Pink");
        default:
            console.log("Other");

    }
};

// in all the above the cases are not in blocks
// can be put into blocks to avoid block level scope issues:

function blockSwitch() {
    let color = "Pink";

    switch(color) {
        case 1: {
            let message = "Yay!";
 
            console.log(message + " The color is red");
            break;
        }
        case 2: {
            let message = "Durp!";

            console.log(message + " The color is not red");
            break;
        }
        default: {
            let message = "Answer is: ";
            console.log(message + " Other");
        }
    }
};



blockSwitch();