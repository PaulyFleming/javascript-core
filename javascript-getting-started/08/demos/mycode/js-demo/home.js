
changePercentOff( 32 );

// Objects

let person = {
    firstName: 'Billy',
    lastName: 'Wagababa',
    discountRate: 5,
    partTime: false,
    showInfo: function() {
        changePercentOff(this.discountRate);
    }
};

//changing params of objects. 2 ways;

person.age = 33;
console.log(person.age);

person['age'] = 44;
console.log(person.age);

showUser(person.firstName, person.lastName);

// call an object method (to invoke a function/method)
person.showInfo();


//sending values and objects to functions work very differently:

let message2 = "Yeah yeah yeah yeah";

function changeSecondMessage(message2) {
    message2 = "No no no no";
}

changeSecondMessage(message2);

showSecondMessage(message2);


let person2 = {
    firstName: 'Jimmy',
    lastName: 'Hendrix',
    discountRate: 50,
    partTime: false,
}

function incrementDiscount(person2) {
    person2.discountRate++;
}

incrementDiscount(person2);

showThirddMessage(person2.discountRate);

let currentDate = new Date();
let now = currentDate.toGMTString();

showDate(now);

let s = 'Hello';
console.log(s.charAt(1));

const header = document.getElementById('date');

header.style.color = 'rgba(1,1,1,0.6)';

const button = document.getElementById('see-review');
const review = document.getElementById('review');

button.addEventListener('click', function(currentDate) {
    showFourthMessage(now);
    console.log('click');
});

button.addEventListener('click', function() {

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent= 'CLOSE REVIEW';
    } else {
        review.classList.add('d-none');
        button.textContent= 'SEE REVIEW';
    }
});