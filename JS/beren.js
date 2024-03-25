let score = 0;
let currentQuestion = 1;
let correctAnswers = ["8", "Alleseters", "Kodiakbeer", "Boar", "IJsbeer", "Ursus arctos", "Zuid-Amerika", "Hibernatie", "Troep", "Panda", "bult", "vis", "maanden", "instincten", "grommen"]

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

    setTimeout(nextQuestion, 1500);
}


function nextQuestion() {
    // Reset antwoordkleuren
    let buttons = document.querySelectorAll(".antwoorden button");
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(146, 85, 5)";
    });

    document.getElementById("leesBeerInfo").style.display = "none"
    document.getElementById("beerInfo").style.display = "none"

    document.getElementById("q" + currentQuestion).style.display = "none";

    currentQuestion++;

    if (currentQuestion <= 15) {
        correctAnswer = correctAnswers[currentQuestion - 1]; // Update correct answer
        document.getElementById("q" + currentQuestion).style.display = "block"; // Display next question
    }  else {
        document.getElementById("quizScore").innerText = "Score: " + score + "/15"
        document.getElementById("quizScore").style.display = "block";
    }
}


function checkOpenAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    let correctOpenAnswer = correctAnswers[currentQuestion - 1];
    
    console.log("Answer:", answer);
    console.log("Correct Answer:", correctOpenAnswer);
    
    if (answer.includes(correctOpenAnswer)) {
        score++;
        console.log("Score:", score);
    }
    
    setTimeout(nextQuestion, 100);
}
