// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Apakah inti utama dari Matahari yang memancarkan energi besar melalui reaksi termonuklir?",
    answer: "Inti",
    options: [
      "Fotosfer",
      "Korona",
      "Zona Konvektif",
      "Inti"
    ]
  },
    {
    numb: 2,
    question: "Berapakah jarak rata-rata Bumi dari Matahari?",
    answer: "150 juta km",
    options: [
      "100 juta km",
      "150 juta km",
      "200 juta km",
      "250 juta km"
    ]
  },
    {
    numb: 3,
    question: "Planet mana yang dikenal memiliki variasi suhu harian terbesar?",
    answer: "Merkurius",
    options: [
      "Merkurius",
      "Bumi",
      "Venus",
      "Mars"
    ]
  },
    {
    numb: 4,
    question: "Apa yang menyebabkan warna biru pada Uranus?",
    answer: "Metana",
    options: [
      "Hidrogen",
      "Helium",
      "Metana",
      "Nitrogen"
    ]
  },
    {
    numb: 5,
    question: "Fenomena apakah yang terjadi saat Merkurius melintas di depan piringan Matahari?",
    answer: "Transit",
    options: [
      "Transit",
      "Gerhana",
      "Konjungsi",
      "Oposisi"
    ]
  },

  {
  numb: 6,
  question: "Berapakah suhu inti Matahari?",
  answer: "15 juta derajat Celsius",
  options: [
    "1 juta derajat Celsius",
    "5 juta derajat Celsius",
    "10 juta derajat Celsius",
    "15 juta derajat Celsius"
  ]
},
  {
  numb: 7,
  question: "Apakah nama kawah besar di Merkurius yang memiliki sinar terang memancar hingga 1000 km?",
  answer: "Kawah Hokusai",
  options: [
    "Kawah Caloris",
    "Kawah Hokusai",
    "Kawah Gusev",
    "Kawah Gale"
  ]
},
  {
  numb: 8,
  question: "Apakah lapisan atmosfer Bumi yang melindungi dari radiasi berbahaya?",
  answer: "Stratosfer",
  options: [
    "Troposfer",
    "Stratosfer",
    "Mesosfer",
    "Termosfer"
  ]
},
  {
  numb: 9,
  question: "Mengapa atmosfer Venus sangat berbeda dari Bumi?",
  answer: "Terbuat dari asam sulfat pekat",
  options: [
    "Terbuat dari asam sulfat pekat",
    "Mengandung lebih banyak oksigen",
    "Lebih sedikit nitrogen",
    "Mengandung lebih banyak helium"
  ]
},
  {
  numb: 10,
  question: "Planet manakah yang memiliki cincin yang paling terkenal dan kompleks?",
  answer: "Saturnus",
  options: [
    "Jupiter",
    "Uranus",
    "Saturnus",
    "Neptunus"
  ]
},
  {
  numb: 11,
  question: "Medan magnet Matahari yang sangat kuat dapat mempengaruhi cuaca antariksa. Bagaimanakah fenomena ini dapat berdampak pada bumi dan satelit yang mengorbit di sekitarnya?",
  answer: " Semua jawaban benar",
  options: [
    "Mengganggu komunikasi radio dan sinyal satelit",
    "Mempercepat proses peluruhan orbit satelit",
    " Semua jawaban benar",
    "Meningkatkan risiko radiasi bagi astronot"
  ]
},
  {
  numb: 12,
  question: "Apa yang menyebabkan efek rumah kaca yang tak terkendali di Venus?",
  answer: "Aktivitas vulkanik besar",
  options: [
    "Gas metana",
    "Aktivitas vulkanik besar",
    "Karbon dioksida",
    "Oksigen"
  ]
},
  {
  numb: 13,
  question: "Berapakah periode orbit Mars mengelilingi Matahari?",
  answer: "687 hari",
  options: [
    "225 hari",
    "365 hari",
    "687 hari",
    "880 hari"
  ]
},
  {
  numb: 14,
  question: "Apakah nama badai besar yang sudah berlangsung selama lebih dari 300 tahun di Jupiter?",
  answer: "Great Red Spot",
  options: [
    "Great Dark Spot",
    "Badai Oval Kecil",
    "Badai Kristal",
    "Great Red Spot"
  ]
},
  {
  numb: 15,
  question: "Medan magnet Uranus yang tidak simetris dan tidak terpusat pada inti planet disebabkan oleh?",
  answer: "Gerakan materi konduktif di lapisan dalam planet",
  options: [
    "Aktivitas vulkanik",
    "Komposisi atmosfer",
    "Aktivitas geyser",
    "Gerakan materi konduktif di lapisan dalam planet"
  ]
},
  {
  numb: 16,
  question: "Siklus aktivitas Matahari terjadi dalam rentang berapa tahun?",
  answer: "11 tahun",
  options: [
    "5 tahun",
    "7 tahun",
    "11 tahun",
    "15 tahun"
  ]
},
  {
  numb: 17,
  question: "Apakah yang ditemukan oleh misi MESSENGER NASA di kutub gelap Merkurius?",
  answer: "Es air",
  options: [
    "Es air",
    "Lava beku",
    "Gas metana",
    " Kawah baru"
  ]
},
  {
  numb: 18,
  question: "Apakah unsur utama yang membentuk atmosfer Titan, bulan terbesar Saturnus?",
  answer: "Nitrogen",
  options: [
    "Oksigen",
    "Nitrogen",
    "Karbon dioksida",
    "Hidrogen"
  ]
},
  {
  numb: 19,
  question: "Manakah pernyataan yang benar mengenai kemiringan sumbu Uranus?",
  answer: "Miring ekstrem lebih dari 90 derajat",
  options: [
    "Tidak miring sama sekali",
    "Sedikit miring seperti Bumi",
    "Miring ekstrem lebih dari 90 derajat",
    "Miring kurang dari 10 derajat"
  ]
},
  {
  numb: 20,
  question: "Apakah fenomena yang menyebabkan metana ditemukan di atmosfer Mars?",
  answer: "Proses geologis seperti oksidasi besi",
  options: [
    "Proses geologis seperti oksidasi besi",
    "Aktivitas vulkanik",
    "Geyser air panas",
    "Oksigenasi atmosfer"
  ]
},
];

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
let questionAnsweredCount = 0;


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
    window.location.href = "#"; // Ganti dengan URL tujuan
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

        // Tambahkan logika untuk meningkatkan skor jika soal yang dilalui lebih dari 5
        if (questionIndex % 5 == 0) {
            userScore += 10; // Tambahan skor, misalnya 10 poin
        }

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
    let scoreTag = `<span> Kamu menadapatkan <p>${userScore}</p> poin.</span>`;
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
