// Houd bij welke vraag momenteel wordt weergegeven
let currentQuestion = 1;

function checkAnswer(questionId, correctAnswer, element) {
    let selectedAnswer = element.innerText;
    if (selectedAnswer == correctAnswer) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Correct!";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Fout. Het juiste antwoord is " + correctAnswer + ".";
    }

    // Deactiveer de antwoordknoppen na het selecteren van een antwoord
    let answers = document.getElementById(questionId).querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("disabled");
    }

    // Ga na 5 seconden naar de volgende vraag
    setTimeout(nextQuestion, 3000);
}

function nextQuestion() {
    // Verberg de huidige vraag
    document.getElementById("q" + currentQuestion).style.display = "none";

    // Verhoog het vraagnummer
    currentQuestion++;

    // Toon de volgende vraag
    document.getElementById("q" + currentQuestion).style.display = "block";
}

function checkGrassAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    if (answer.includes("gras")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed gedaan! Kangoeroes eten inderdaad gras.";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes eten voornamelijk gras.";
    }
    setTimeout(nextQuestion, 4000);
}

function checkHoppenAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    if (answer.includes("Hoppen")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes bewegen door te hoppen";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes bewegen door te hoppen";
    }
    setTimeout(nextQuestion, 4000);
}

function checkBedreigingAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    if (answer.includes("jacht")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes zijn bedreigd door jacht.";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes zijn bedreigd door jacht.";
    }
    setTimeout(nextQuestion, 4000);
}

function checkTaalAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    if (answer.includes("lichaamstaal")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! Kangoeroes communiceren met hun lichaamstaal.";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes communiceren met hun lichaamstaal.";
    }
    setTimeout(nextQuestion, 4000);
}

function checkGameAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    if (answer.includes("Tekken")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed zo! De kangoeroes verschijnt in de videogame Tekken.";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. De kangoeroes verschijnt in de videogame Tekken.";
    }
    setTimeout(nextQuestion, 4000);
}