/* This is the java script code */

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2,
        image: "https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/why-is-mars-called-the-red-planet-151828846-16x9.jpg?VersionId=AJNTpbOFLtFljuT59lmMlkMbgoZlT0_4&size=690:388"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQyGowScmW_xUajI3KyiJ1JsSNaLeiyEwYKsCipRcagZUc0hZPy6kge54QoMrwN7JyjK0axMmngMljSEKcBvOtzYJTbQexzRhjzlXBVJw"
    }
];

let currentQuestion = 0;
let score = 0;

// Automatically load the first question when the script runs
loadQuestion();

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("question-image").src = questionData.image;

    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            ${option}
        `;
        label.classList.add("option");
        choicesContainer.appendChild(label);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    document.getElementById("quiz-container").innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>You scored ${score} out of ${quizData.length}!</p>
        <button class="btn" onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuestion();
}
