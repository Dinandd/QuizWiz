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
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    // Verberg de huidige vraag
    document.getElementById("q" + currentQuestion).style.display = "none";

    // Verhoog het vraagnummer
    currentQuestion++;

    // Toon de volgende vraag
    document.getElementById("q" + currentQuestion).style.display = "block";
}

function checkOpenAnswer(questionId) {
    let answer = document.getElementById(questionId + "-answer").value;
    // Hier kun je een eenvoudige controle toevoegen, bijvoorbeeld:
    if (answer.includes("gras")) {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Goed gedaan! Kangoeroes eten inderdaad gras.";
    } else {
        document.getElementById(questionId).querySelector(".feedback").innerHTML = "Dat is niet helemaal correct. Kangoeroes eten voornamelijk gras.";
    }
}
