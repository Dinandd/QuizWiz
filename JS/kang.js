function startQuiz() {
    // Sla de naam op
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);

        // Check if the name field is empty
        if (name.trim() == "") {
            alert("Vul een naam in om te beginnen.");
            return;
        }

    // Verberg het startscherm en toon de quiz
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-form").style.display = "block";
}


// Houd bij welke vraag momenteel wordt weergegeven
let currentQuestion = 1;
let score = 0;

function checkAnswer(questionId, correctAnswer, element) {
    let selectedAnswer = element.innerText;
    if (selectedAnswer == correctAnswer) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Correct!";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Fout. Het juiste antwoord is " + correctAnswer + ".";
    }

    // Deactiveer de antwoordknoppen na het selecteren van een antwoord
    let answers = document.getElementById(questionId).querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("disabled");
    }

    // Ga na 5 seconden naar de volgende vraag
    setTimeout(nextQuestion, 1700);
}

function nextQuestion() {
    // Verberg de huidige vraag
    document.getElementById("q" + currentQuestion).style.display = "none";

    // Verhoog het vraagnummer
    currentQuestion++;

    // If there are no more questions, end the quiz
    if (document.getElementById("q" + currentQuestion) === null) {
        endQuiz();
    } else {
        // Toon de volgende vraag
        document.getElementById("q" + currentQuestion).style.display = "block";
    }
}
function checkGrassAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    if (answer.includes("gras")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed gedaan! Kangoeroes eten inderdaad gras.";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes eten voornamelijk gras.";
    }
    setTimeout(nextQuestion, 2000);
}

function checkHoppenAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    if (answer.includes("hoppen")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes bewegen door te hoppen";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes bewegen door te hoppen";
    }
    setTimeout(nextQuestion, 2000);
}

function checkBedreigingAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    if (answer.includes("jacht")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes zijn bedreigd door jacht.";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes zijn bedreigd door jacht.";
    }
    setTimeout(nextQuestion, 2000);
}

function checkTaalAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    if (answer.includes("lichaamstaal")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes communiceren met hun lichaamstaal.";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes communiceren met hun lichaamstaal.";
    }
    setTimeout(nextQuestion, 2000);
}

function checkGameAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value.toLowerCase();
    if (answer.includes("tekken")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! De kangoeroes verschijnt in de videogame Tekken.";
        score++;
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. De kangoeroes verschijnt in de videogame Tekken.";
    }
    setTimeout(nextQuestion, 2000);
}

function endQuiz() {
    let name = localStorage.getItem("name");
    let finalScore = score; // Calculate the score
    document.getElementById("result").innerHTML = name + ", je hebt " + finalScore + " vragen goed beantwoord.";

    // Display gif based on score
    document.getElementById("result-container").style.display = "block";
    if (finalScore >= 0 && finalScore <= 5) {
        document.getElementById("gif").src = "pics/oke.gif";
    } else if (finalScore >= 6 && finalScore <= 10) {
        document.getElementById("gif").src = "pics/goed.gif";
    } else if (finalScore >= 11 && finalScore <= 15) {
        document.getElementById("gif").src = "pics/perfect.gif";
    }
}