// Selecting all required elements
const startButton = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let timeScore = 0;
let timeValue = 15;
let questionIndex = 0;
let questionNumber = 1;
let userScore = 0;
let timer;
let timerLine;
let timerWidth = 0;

// Event listener for Start Quiz button
startButton.onclick = () => {
    infoBox.classList.add("activeInfo"); // Show info box
}

// Event listener for Exit Quiz button
exitButton.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Hide info box
}

// Event listener for Continue Quiz button
continueButton.onclick = () => {
    infoBox.classList.remove("activeInfo"); // Hide info box
    quizBox.classList.add("activeQuiz"); // Show quiz box
    showQuestion(questionIndex); // Show first question
    updateQuestionCounter(questionNumber); // Update question counter
    startTimer(timeValue); // Start timer
    startTimerLine(timerWidth); // Start timer line
}

// Event listener for Restart Quiz button
const restartQuizButton = resultBox.querySelector(".buttons .restart");
restartQuizButton.onclick = () => {
    quizBox.classList.add("activeQuiz"); // Show quiz box
    resultBox.classList.remove("activeResult"); // Hide result box
    resetQuiz(); // Reset quiz variables and UI
}

// Event listener for Quit Quiz button
const quitQuizButton = resultBox.querySelector(".buttons .quit");
quitQuizButton.onclick = () => {
    window.location.reload(); // Reload the current window
}

// Event listener for Next Question button
const nextButton = document.querySelector("footer .next_btn");
nextButton.onclick = () => {
    if (questionIndex < questions.length - 1) { // If there are more questions
        questionIndex++; // Increment question index
        questionNumber++; // Increment question number
        showQuestion(questionIndex); // Show next question
        updateQuestionCounter(questionNumber); // Update question counter
        resetTimer(); // Reset timer
    } else {
        showResult(); // Show result box
    }
}

// Function to reset quiz variables and UI
function resetQuiz() {
    timeValue = 15;
    questionIndex = 0;
    questionNumber = 1;
    userScore = 0;
    timerWidth = 0;
    showQuestion(questionIndex);
    updateQuestionCounter(questionNumber);
    resetTimer();
    timeText.textContent = "Time Left";
    nextButton.classList.remove("show");
}

// Function to show questions and options
function showQuestion(index) {
    const questionText = document.querySelector(".que_text");

    // Creating new tags for question and options
    let questionTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionTag = questions[index].options.map(option => `<div class="option"><span>${option}</span></div>`).join('');

    questionText.innerHTML = questionTag;
    optionList.innerHTML = optionTag;

    // Adding event listeners to options
    const options = optionList.querySelectorAll(".option");
    options.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)");
    });
}

// Function to handle option selection
function optionSelected(answer) {
    clearInterval(timer);
    clearInterval(timerLine);
    
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionIndex].answer;
    const allOptions = optionList.children.length;

    let timeLeft = parseInt(timeCount.textContent);
    if (userAnswer === correctAnswer) {
        timeScore = timeLeft * 10; // Example: 10 points for each second left
        userScore += timeScore;
        answer.classList.add("correct");
    } else {
        answer.classList.add("incorrect");
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent === correctAnswer) {
                optionList.children[i].classList.add("correct");
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
    nextButton.classList.add("show");
}

// Function to show the result box
function showResult() {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.remove("activeQuiz");
    resultBox.classList.add("activeResult");

    const scoreText = resultBox.querySelector(".score_text");
    let scoreTag = `<span>You scored <p>${userScore}</p> points out of a possible <p>${questions.length * 150}</p> points.</span>`;
    scoreText.innerHTML = scoreTag;
}

// Function to start the timer
function startTimer(time) {
    timer = setInterval(() => {
        timeCount.textContent = time;
        time--;
        if (time < 10) {
            timeCount.textContent = "0" + time;
        }
        if (time <= 0) {
            clearInterval(timer);
            timeText.textContent = "Time Off";
            autoSelectCorrectAnswer();
            nextButton.classList.add("show");
        }
    }, 1000);
}

// Function to automatically select the correct answer when time is up
function autoSelectCorrectAnswer() {
    const allOptions = optionList.children.length;
    let correctAnswer = questions[questionIndex].answer;
    for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent === correctAnswer) {
            optionList.children[i].classList.add("correct");
        }
    }
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
}

// Function to start the timer line
function startTimerLine(time) {
    timerLine = setInterval(() => {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(timerLine);
        }
    }, 29);
}

// Function to update the question counter
function updateQuestionCounter(index) {
    let totalQuestionCountTag = `<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
    document.querySelector("footer .total_que").innerHTML = totalQuestionCountTag;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    clearInterval(timerLine);
    startTimer(timeValue);
    startTimerLine(timerWidth);
    timeText.textContent = "Time Left";
    nextButton.classList.remove("show");
}
