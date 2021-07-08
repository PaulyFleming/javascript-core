
'use strict'; // enforces variable declaration

const containers = 
    document.getElementsByClassName('container');
containers[0].classList.add('d-none');
console.log(containers);

// log a var defined in utils.js (from global scope)
console.log(scopeTestVar);

/*
Many devs will apply global variables to an object
and use the object to access global vars. This
can help stop glabal scope pollution
*/

const app = {
    productId: 45678,
    userName: 'Joe',
    orederNumber: 789
};

function showProductId() {
    console.log(app.productId);
};

showProductId();


