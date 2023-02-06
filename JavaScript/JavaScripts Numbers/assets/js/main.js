// Path: JavaScripts Numbers\assets\js\main.js
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
var operator = document.getElementById("operator").value;
var finalResult = 0;

function calculate() {    

    if (operator == "add") {
        finalResult = parseInt(num1) + parseInt(num2);
    } else if (operator == "sub") {
        finalResult = parseInt(num1) - parseInt(num2);
    } else if (operator == "mul") {
        finalResult = parseInt(num1) * parseInt(num2);
    } else if (operator == "div") {
        finalResult = parseInt(num1) / parseInt(num2);
    }

    result.value = finalResult;    
}

document.getElementById("result").value = finalResult;

// Calculator for percentage
function percentage() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("result");
    var operator = document.getElementById("operator").value;
    var finalResult = 0;

    if (operator == "add") {
        finalResult = parseInt(num1) + parseInt(num2);
    } else if (operator == "sub") {
        finalResult = parseInt(num1) - parseInt(num2);
    } else if (operator == "mul") {
        finalResult = parseInt(num1) * parseInt(num2);
    } else if (operator == "div") {
        finalResult = parseInt(num1) / parseInt(num2);
    }

    result.value = finalResult;
}

