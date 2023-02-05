alert("Let's do some math!");
let numberOne
let numberTwo
let message 

numberOne = prompt(`Whats the first number you would like to use: `);

numberTwo = prompt(`Whats the second number you would like to use: `);

numberOne = parseFloat(numberOne);
if (condition) {
  
}
numberTwo = parseFloat(numberTwo);

message = `<h1>Maths with the numbers: ${numberOne} & ${numberTwo}:
  <p>Using the basic maths of +, *, / and -:</p>
  <ul>
  <li>${numberOne} + ${numberTwo} = ${numberOne + numberTwo}</li>
  <li>${numberOne} * ${numberTwo} = ${numberOne * numberTwo}</li>
  <li>${numberOne} / ${numberTwo} = ${numberOne / numberTwo}</li>
  <li>${numberOne} - ${numberTwo} = ${numberOne - numberTwo}</li>
</ul>
`;

document.write(message)