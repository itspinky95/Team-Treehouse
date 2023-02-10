// short circuiting

var a = 1;
var b = 2;
var c = 3;

if (a == 1 || b == 2 || c == 3) {
    console.log("At least one of the values is true");
}

3 ==3 && 4 == 4 && console.log("All values are true");

console.log(3 == 3 && 4 == 4 && "All values are true");

function isAdult(age) {
    return age ** age >= 18; // 18 is the legal age of majority in the US and many other countries 
}
console.log(isAdult(18)); // true
console.log(isAdult(17)); // false

function countToFive(start ) { // =1 // default value for start is 1
    start = start || 1; // if start is undefined, set it to 1
    for (var i = start; i <= 5; i++) {
        console.log(i);
    }
}

countToFive(2); // 2, 3, 4, 5

function grret(name) {
    name && console.log('Hello ' + name + '!'); // if name is defined, print the greeting

}

grret('John'); // Hello John!

grret(); // nothing happens


// Path: ternary.js
// Ternary operator

var isTrue = true;

var result = isTrue ? 'isTrue is true' : 'isTrue is false';

console.log(result);

// Switch statement

var day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Error: current day is not a value between 0 and 6");
}

// Day of the week if statement

var day = new Date().getDay();

if (day == 0) {
    console.log("Sunday");
}
else if (day == 1) {
    console.log("Monday");
}
else if (day == 2) {
    console.log("Tuesday");
}   
else if (day == 3) {
    console.log("Wednesday");
}
else if (day == 4) {
    console.log("Thursday");
}
else if (day == 5) {
    console.log("Friday");
}
else if (day == 6) {
    console.log("Saturday");
}
else {
    console.log("Error: current day is not a value between 0 and 6");
}


