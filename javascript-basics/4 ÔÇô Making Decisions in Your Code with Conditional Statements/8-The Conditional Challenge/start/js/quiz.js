/* 
  1. Store correct answers
  - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
main = document.querySelector('main');

/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/
const answer1 = prompt("Name a programming language that's also a gem?");
if (answer1.toUpperCase() === 'RUBY') {
  correct += 1;
}
const answer2 = prompt("Name a programming language that's also a snake?");
if (answer1.toUpperCase() === 'PYTHON') {
  correct += 1;
}
const answer3 = prompt("What language do you use to style a webpages?");
if (answer1.toUpperCase() === 'CSS') {
  correct += 1;
}
const answer4 = prompt("What language do you use to build a webpages?");
if (answer1.toUpperCase() === 'HTML') {
  correct += 1;
}
const answer5 = prompt("What language do you use to make interactive webpage?");
if (answer1.toUpperCase() === 'JAVASCRIPT') {
  correct += 1;
}

/*
  5. Rank player based on number of correct answers
  - 5 correct = Gold
  - 3-4 correct = Silver
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/
if (correct === 5) {
  rank = "Gold";
} else if (correct >= 3) {
  rank = "Silver";
} else if (correct >= 1) { // check for 1-2 correct
  rank = "Bronze";
} else {
  rank = "None :(";
}


// 6. Output results to the <main> element
main.innerHTML = `
  <h2>You got ${correct} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>
  `
