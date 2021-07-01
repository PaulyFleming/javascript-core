function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}

function showUser(firstName, lastName) {
    document.getElementById('username').textContent = firstName + " " + lastName;
}

function showSecondMessage(message) {
    document.getElementById('secondmessage'). textContent = message;
}

function showThirddMessage(message) {
    document.getElementById('thirdmessage'). textContent = message;
}

function showDate(currentDate) {
    document.getElementById('date').textContent = currentDate;
}

function showFourthMessage(currentDate) {
    document.getElementById('fourth-message').textContent = currentDate;
}