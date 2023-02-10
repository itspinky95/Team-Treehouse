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

// Path: muiti.js
// Day of the week switch statement
// Switch statements are more efficient than if statements

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

// Path: muiti.js
// For loop

for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Path: muiti.js
// While loop

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// Path: muiti.js
// Do while loop

var i = 0;

do {
    console.log(i);
    i++;
}
while (i < 10);

// Path: muiti.js
// For in loop

var person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};

var text = "";
var x;

for (x in person) {
    text += person[x];
}

console.log(text);

// Path: muiti.js
// Break statement

var i = 0;

while (i < 10) {
    console.log(i);
    if (i == 3) {
        break;
    }
    i++;
}

// Path: muiti.js
// Continue statement

var i = 0;

while (i < 10) {
    i++;
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// Path: muiti.js
// Function

function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(4, 3));

// Path: muiti.js
// Function expression

var x = function (a, b) {
    return a * b;
}

console.log(x(4, 3));

// Path: muiti.js
// Function constructor

var myFunction = new Function("a", "b", "return a * b");

console.log(myFunction(4, 3));

// Path: muiti.js

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// Path: muiti.js
// Object constructor

function person(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var myFather = new person("John", "Doe", 5566);
var myMother = new person("Sally", "Rally", 5567);

console.log(myFather.fullName());
console.log(myMother.fullName());

// Path: muiti.js
// Object create

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var myFather = Object.create(person);
myFather.firstName = "John";
myFather.lastName = "Doe";
myFather.id = 5566;

console.log(myFather.fullName());

// Path: muiti.js
// Object create with constructor

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var myFather = Object.create(person, {
    firstName: {value: "John"},
    lastName: {value: "Doe"},
    id: {value: 5566}
});

console.log(myFather.fullName());

// Path: muiti.js