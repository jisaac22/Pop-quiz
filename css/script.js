const startBtn = document.getElementById("start-button");
const answerBtn1 = document.querySelector(".answer1");
const answerBtn2 = document.querySelector(".answer2");
const answerBtn3 = document.querySelector(".answer3");
const answerBtn4 = document.querySelector(".answer4");
let countdownTimer = 50;
const timer = document.querySelector(".timer")
let questions = [
    {
      question: " What is the first number place holder of an Array? ",
     answerBtn1: "1",
     answerBtn2: "2",
     answerBtn3: "0",
     answerBtn4: "3",
     correct: "3"
    },
    { 
      question: " What is Boolean defined as ?",
      answerBtn1: "Yes/No",
      answerBtn2: "True/False",
      answerBtn3: "Maybe",
      answerBtn4: "All of the above",
      correct: "2"
    },
    { 
      question: "What is the HTML tag under which one can write the JavaScript code?",
      answerBtn1: "<javascript>",
      answerBtn2: "<scripted>",
      answerBtn3: "<js>",
      answerBtn4: "<script>",
      correct: "4"
    },
    {
      question: " Which of the following is not a data type? ",
      answerBtn1: "Boolean",
      answerBtn2: "String",
      answerBtn3: "letiable",
      answerBtn4: "Number",
      correct: "3"
    },
    { 
      question: " What logs data directly to the console?",
      answerBtn1: "console.log",
      answerBtn2: "console.set",
      answerBtn3: "console.save",
      answerBtn4: "console.input",
      correct: "1"
    },
];

let questionBox = document.querySelector(".question-1")
let questionIndex = 0;




//added am event listener to start a timer 
startBtn.addEventListener("click", startQuiz);
 
function startQuiz(event) {
event.preventDefault()
timer.classList.remove("hide");
counter.classList.remove("hide");
startBtn.classList.add("hide");
instructions = document.querySelector(".instructions");
instructions.classList.add("hide");
title = document.querySelector(".title");
title.classList.add("hide");
questionContainer = document.querySelector(".question-container")
questionContainer.classList.remove("hide");
 displayQuestion()
//  startTime()

}


function startTime(){
  let timerInterval = setInterval(function (){
     countdownTimer--;
     timer.textContent = countdownTimer + " seconds left";
     //added end quiz and display results
     if (countdownTimer  === 0 || questions.length == questionIndex){
         clearInterval(timerInterval);
         questionContainer.classList.add("hide")
         resultContainer.classList.remove("hide")
         showResults()
         return;
     }
 }, 1000)
}
 
function displayQuestion() {
   quest = questions[questionIndex];
   questionBox.textContent = quest.question;
   answerBtn1.textContent = quest.answerBtn1;
   answerBtn2.textContent = quest.answerBtn2;
   answerBtn3.textContent = quest.answerBtn3;
   answerBtn4.textContent = quest.answerBtn4;
  
};
let score = 0;
let result = document.querySelector(".result1");
let counter = document.querySelector(".score");


//added function to run next question 
function questionAnswer(answer){
    if(questions[questionIndex].correct == answer){
        result.textContent = "Correct!";
      counter.textContent = score+=20;
      localStorage.setItem("counter", score)
    } else 
    {  result.textContent = "Incorrect!";
// added increased counter if answer if incorrect
        countdownTimer-=10; 
    };
        questionIndex++
        displayQuestion()
  };

const resultContainer = document.getElementById("show-results");

   
const submitBtn = document.querySelector(".submit-btn");
const finalGrade = document.querySelector(".final-result");
const savedName = document.querySelector(".saved-name");
const savedGrade = document.querySelector(".saved-result");



submitBtn.addEventListener("click", function(event) {
 event.preventDefault()
 if (userNameSaved === "") {
   finalGrade.textContent = "Enter a name"
 } 
 else {
  

// added local storage to display username and score 
 let userNameSaved = document.querySelector(".name").value;
 userName = localStorage.getItem("name");
 localStorage.setItem("name", userNameSaved);
 savedName.textContent = "Name: " + userNameSaved;
 savedGrade.textContent = "Score: " + score;
 }
});
