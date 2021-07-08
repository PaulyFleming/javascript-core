
const button = document.getElementById('see-review');

button.addEventListener('click', function() {

    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
    

});

const values = ['a', 'b', 'c'];
console.log(values);
console.log(values[0]);
console.log(values[4]); // undefined

values.push('d');
console.log(values);

let last = values.pop();
console.log(values);
console.log(last);

let first = values.shift();
console.log(values);
console.log(first);

values.unshift('a');
console.log(values);

values.push('hello', 'world');
console.log(values);

values.unshift('whats', 'this');
console.log(values);

// Searching & Looping Arrays

for (i in values) {
    console.log("For Loop: " + i);
};
// forEach
values.forEach(function(item) {
    console.log("forEach method: "+ item);
});


console.log( values.indexOf('world'));
console.log( values.indexOf('potato')); // returns -1 as potato is not in the array values

// filter
const set = values.filter(function(item) {
    return item > 'b';
});
console.log("set: " + set);
console.log("for comparrison, values: " + values);

// find
let found = values.find(function(item){
    return item.length > 1;
});
console.log("Found var: " + found); // this only finds the first match

// get all containers
const containers = document.getElementsByClassName('container');
// hide the second container
containers[2].classList.add('d-none');
// show all the containers (as HTML collection - whic is essentially an array)
console.log(containers);


