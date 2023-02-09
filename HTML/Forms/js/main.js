// forntion to get inout from user form to log to console
function logSubmit(event) {
    // prevent default form action from being carried out
    event.preventDefault();
    
    const input = document.querySelector("#input");
    const value = input.value;
    console.log(value);
    }
// function to check if user entered a valid input
function checkInput() {
    const input = document.querySelector("#input");
    const value = input.value;
    if (value == "") {
        alert("Please enter a valid input");
    } else {
        alert("Thank you for your input");
    }
}
// function to clear input field
function clearInput() {
    const input = document.querySelector("#input");
    input.value = "";
}
// function to change background color
function changeColor() {
    const input = document.querySelector("#input");
    const value = input.value;
    document.body.style.backgroundColor = value;
}
// function to change text color
function changeTextColor() {
    const input = document.querySelector("#input");
    const value = input.value;
    document.body.style.color = value;
}
// function to change font size
function changeFontSize() {
    const input = document.querySelector("#input");
    const value = input.value;
    document.body.style.fontSize = value;
}
// function to change font family

// Path: js\main.js
