// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']
];


// 2. Store the number of questions answered correctly
let correctAnswers = 0;
let rightQuestions = [];
let wrongQuestions = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  
  if ( response === answer ) {
    correctAnswers++;
    rightQuestions.push(question);
  } else {
    wrongQuestions.push(question)
  }
}

// 4. Display the number of correct answers to the user

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
};


let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got those question(s) right:</h2>
  <ol>
    ${createListItems(rightQuestions)}
  </ol>
  <h2>You got those question(s) Wrong:</h2>
  <ol>
    ${createListItems(wrongQuestions)}
  </ol>
  <p>Try Again</p>
`;

document.querySelector('main').innerHTML = html;



