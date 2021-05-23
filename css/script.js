//pulled a couple of buttons to document
var startBtn = document.getElementById("start-button");
var answerBtn1 = document.querySelector(".answer1");
var answerBtn2 = document.querySelector(".answer2");
var answerBtn3 = document.querySelector(".answer3");
var answerBtn4 = document.querySelector(".answer4");
var countdownTimer = 60;
var timer = document.querySelector(".timer")
var score = 20;
var questions = [
    {question: " What is the first number place holder of an Array? ",
     answerBtn1: "1",
     answerBtn2: "2",
     answerBtn3: "0",
     answerBtn4: "3",
     correct: "3"},
    { question: " What is Boolean defined as ?",
      answerBtn1: "Yes/No",
      answerBtn2: "True/False",
      answerBtn3: "Maybe",
      answerBtn4: "All of the above",
      correct: "2"},
    { question: "What is the HTML tag under which one can write the JavaScript code?",
      answerBtn1: "<javascript>",
      answerBtn2: "<scripted>",
      answerBtn3: "<js>",
      answerBtn4: "<script>",
      correct: "4"},
    { question: " Which of the following is not a data type? ",
      answerBtn1: "Boolean",
      answerBtn2: "String",
      answerBtn3: "Variable",
      answerBtn4: "Number",
      correct: "3"},
    { question: " What logs data directly to the console?",
      answerBtn1: "console.log",
      answerBtn2: "console.set",
      answerBtn3: "console.save",
      answerBtn4: "console.input",
      correct: "1"},
];

var questionBox = document.getElementById("question-1")
var questionIndex = 0;
var nextQuestion = questions.length - 1;




//added am event listener to start a timer 
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
// added function to run first question display
startBtn.classList.add("hide");
instructions = document.querySelector(".instructions");
instructions.classList.add("hide");
title = document.querySelector(".title");
title.classList.add("hide");
answerBtn1.classList.remove("hide");
answerBtn2.classList.remove("hide");
answerBtn3.classList.remove("hide");
answerBtn4.classList.remove("hide");
displayQuestion();


var timerInterval = setInterval(function (){
     countdownTimer--;
     timer.textContent = countdownTimer + " seconds left";
     
     
     if (countdownTimer  === 0 || questionIndex < 4) {
         clearInterval(timerInterval);
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
//added function to run next question 
function questionAnswer(answer){
    if(questions[questionIndex].correct == answer){
        console.log("correct")
    } else {
        console.log("wrong")
    }
    questionIndex++
    displayQuestion()
}
