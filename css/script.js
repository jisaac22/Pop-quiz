const startBtn = document.getElementById("start-button");
const answerBtn1 = document.querySelector(".answer1");
const answerBtn2 = document.querySelector(".answer2");
const answerBtn3 = document.querySelector(".answer3");
const answerBtn4 = document.querySelector(".answer4");
const nxtBtn = document.querySelector('.nextBtn')
const timer = document.querySelector(".timer")
const body = document.querySelector('body')
const questionBox = document.querySelector(".question-1")
const submitBtn = document.querySelector(".submit-btn");
const finalGrade = document.querySelector(".final-result");
const savedName = document.querySelector(".saved-name");
const savedGrade = document.querySelector(".saved-result");
const resultContainer = document.getElementById("show-results");
const questionContainer = document.querySelector(".question-container2")
let questionIndex = 0;
let countdownTimer = 60;
let score = 0;
let counter = document.querySelector(".score");


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

 
startBtn.addEventListener("click", startQuiz);
nxtBtn.addEventListener('click', nextQuestion)
submitBtn.addEventListener("click", saveInfo);

function startQuiz(event) {
event.preventDefault()
timer.classList.remove("hide");
counter.classList.remove("hide");
startBtn.classList.add("hide");
instructions = document.querySelector(".instructions");
instructions.classList.add("hide");
title = document.querySelector(".title");
title.classList.add("hide");

questionContainer.classList.remove("hide");
 displayQuestion()
 startTime()

}

function startTime(){
  let timerInterval = setInterval(function (){
     countdownTimer--;
     timer.textContent = countdownTimer + " seconds left";

     if (countdownTimer  === 0 || questions.length == questionIndex){
         clearInterval(timerInterval);
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

function nextQuestion(){
    questionIndex++
    displayQuestion()
    body.style.backgroundColor = 'rgb(21, 133, 224)'
  answerBtn1.disabled = false
  answerBtn2.disabled = false
  answerBtn3.disabled = false
  answerBtn4.disabled = false
}

function questionAnswer(answer){
  if(questions[questionIndex].correct == answer){
    
    counter.textContent = score+=20;
    localStorage.setItem("counter", score)
    body.style.backgroundColor = 'green'  
  }else {  

    countdownTimer-=10; 
    body.style.backgroundColor = 'red'
  };
  answerBtn1.disabled = true
  answerBtn2.disabled = true
  answerBtn3.disabled = true
  answerBtn4.disabled = true
};

function showResults(){
  body.style.backgroundColor = 'rgb(21, 133, 224)'
  timer.textContent = ''
  result.textContent = ''
  questionContainer.classList.add("hide")
  resultContainer.classList.remove('hide')
}

function saveInfo(event) {
 event.preventDefault()
 let userNameSaved = document.querySelector(".name").value;
 if (userNameSaved === "") {
   finalGrade.textContent = "Enter a name"
 } 
 else {
 localStorage.setItem("name", userNameSaved);
 let userName = localStorage.getItem("name");
 
 savedName.textContent = "Name: " + userNameSaved;
 savedGrade.textContent = "Score: " + score;
 }
};
