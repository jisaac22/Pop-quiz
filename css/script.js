//pulled a couple of buttons to document
var startBtn = document.querySelector(".start-button")
var questionsText = document.querySelector(".questions");
var answerBtn1 = document.querySelector(".answer1");
var answerBtn2 = document.querySelector(".answer2");
var answerBtn3 = document.querySelector(".answer3");
var answerBtn4 = document.querySelector(".answer4");
var countdownTimer = 60;

//added am event listener to start a timer 
startBtn.addEventListener("click", startTIMER);

function startTIMER() {
 var timerInterval = setInterval(function (){
     countdownTimer--;
     questionsText.textContent = countdownTimer + " seconds left";

     if (countdownTimer === 0) {
         clearInterval(timerInterval);
     }
 }, 1000);
}