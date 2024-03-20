let score = 0;
let currentQuestion = 1;
let correctAnswers = ["Walvishaai", "Tijgerhaai", "Hamerhaai", "Blauwe haai", "Witte haai", "Geurzin", "3-4 rijen", "Grote hamerhaai", "Megalodon", "Pups"]

function checkAnswer(button) {
    let selectedAnswer = button.textContent;
    let correctAnswer = correctAnswers[currentQuestion - 1];

    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = "green"; // Correct answer, turn button green
        score++; // Increase score
        console.log("Score:", score);
    } else {
        button.style.backgroundColor = "red"; // Incorrect answer, turn button red
    }

    setTimeout(nextQuestion, 100);
}


function nextQuestion() {
    // Reset antwoordkleuren
    let buttons = document.querySelectorAll(".antwoorden button");
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(146, 85, 5)";
    });

    document.getElementById("leesHaaiInfo").style.display = "none"
    document.getElementById("haaiInfo").style.display = "none"

    document.getElementById("q" + currentQuestion).style.display = "none";

    currentQuestion++;

    if (currentQuestion <= 10) {
        correctAnswer = correctAnswers[currentQuestion - 1]; // Update correct answer
        document.getElementById("q" + currentQuestion).style.display = "block"; // Display next question
    }  else {
        document.getElementById("quizScore").innerText = "Score: " + score + "/10"
        document.getElementById("quizScore").style.display = "block";
    }
}

