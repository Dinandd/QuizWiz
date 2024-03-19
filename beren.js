let score = 0;
let currentQuestion = 1;
let correctAnswers = ["8", "Alleseters", "Kodiakbeer", "Boar", "IJsbeer", "Ursus arctos", "Zuid-Amerika", "Hibernatie", "Troep", "Panda", ]
let correctOpenAnswers = ["bult", ""]

function checkAnswer(button) {
    let selectedAnswer = button.textContent;
    let correctAnswer = correctAnswers[currentQuestion - 1];

    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = "green"; // Correct answer, turn button green
        score++; // Increase score
    } else {
        button.style.backgroundColor = "red"; // Incorrect answer, turn button red
    }

    setTimeout(nextQuestion, 2000);
}


function nextQuestion() {
    // Reset antwoordkleuren
    let buttons = document.querySelectorAll(".antwoorden button");
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(146, 85, 5)";
    });

    document.getElementById("q" + currentQuestion).style.display = "none";

    currentQuestion++;

    if (currentQuestion <= correctAnswers.length) {
        correctAnswer = correctAnswers[currentQuestion - 1]; // Update correct answer
        document.getElementById("q" + currentQuestion).style.display = "block"; // Display next question
    } else {
        // Quiz finished, you can add code to handle this scenario
        document.getElementById("quizScore").innerText = "Score: " + score + "/15"
        document.getElementById("quizScore").style.display = "block";

    }
}


function checkOpenAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    // Hier kun je een eenvoudige controle toevoegen, bijvoorbeeld:
    if (answer.includes(correctOpenAnswers[i])) {
        score++
    }
}
