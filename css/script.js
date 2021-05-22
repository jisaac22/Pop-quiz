//pulled a couple of buttons to document
var startBtn = document.getElementById("start-button");
var answerBtn1 = document.querySelector(".answer1");
var answerBtn2 = document.querySelector(".answer2");
var answerBtn3 = document.querySelector(".answer3");
var answerBtn4 = document.querySelector(".answer4");
var trueBtn = document.querySelector(".answerTrue");
var falseBtn = document.querySelector(".answerFalse");
var countdownTimer = 30;
var timer = document.querySelector(".timer")
var score = 20;
var question1 = [
    {question: " what is the first number place holder of an Array  ",
     answerBtn1: "1",
     answerBtn2: "2",
     answerBtn3: "0",
     answerBtn4: "3",
     correct: "0"}
]
var questionBox = document.querySelector(".question-1")
var questionIndex = 0;







//added am event listener to start a timer 
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var timerInterval = setInterval(function (){
     countdownTimer--;
     timer.textContent = countdownTimer + " seconds left";
     firstQuestion()
     
     if (countdownTimer === 0) {
         clearInterval(timerInterval);
         return;
     }
 }, 1000);
};

// added function to run first question display
function firstQuestion(){
     q = question1[questionIndex];
     questionBox.innerHTML = q.question ;
     answerBtn1.innerHTML = q.answerBtn1;
     answerBtn2.innerHTML = q.answerBtn2;
     answerBtn3.innerHTML = q.answerBtn3;
     answerBtn4.innerHTML = q.answerBtn4;

}

function firstAnswer(){
 if (question1[questionIndex].correct == answer);
 console.log("yes")
}