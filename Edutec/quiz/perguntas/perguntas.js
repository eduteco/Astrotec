const questionElements = document.querySelectorAll('.pergunta');
const answerElements = document.querySelectorAll('.alternativas button');

let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "Qual é o Planeta que tem a maior gravidade?",
        answers: ["Sol Supremo", "Marte Merecedor", "Mercúrio Monarca", "Vênus Vitorioso"],
        correctAnswer: 'a1'
    },
    {
        question: "Qual é a temperatura da Terra Tenebrosa",
        answers: ["35ºC", "15ºC", "5ºC", "20ºC"],
        correctAnswer: 'a2'
    },
    {
        question: "Qual o tempo de translação de Mercúrio Monarca",
        answers: ["90dd", "85dd", "88dd", "1,8 ano"],
        correctAnswer: 'a3'
    },
    {
        question: "Qual é o diâmetro de Notorius Netuno?",
        answers: ["49,244km", "116,460km", "139,820km", "50,724km"],
        correctAnswer: 'a1'
    },
    {
        question: "Qual é a menor temperatura dos Planetas?",
        answers: ["Júpiter Juggernaut", "Saturno Soberano", "Urano Universal", "Netorius Netuno"],
        correctAnswer: 'a3'
    },
    {
        question: "Qual planeta recebe o apelido de Merecedor?",
        answers: ["Marte", "Mercúrio", "Júpiter", "Terra"],
        correctAnswer: 'a2'
    },
    {
        question: "Qual é o apelido dado a Netuno?",
        answers: ["Notorious", "Soberano", "Universal", "Tenebrosa"],
        correctAnswer: 'a1'
    },
    {
        question: "Qual Planeta tem o maior tempo de Translação?",
        answers: ["Saturno Soberano", "Marte Merecedor", "Mercúrio Monarca", "Notorious Netuno"],
        correctAnswer: 'a4'
    },
    {
        question: "Qual desses não tem tempo de translação?",
        answers: ["Saturno Soberano", "Urano Universal", "Sol Supremo", "Terra Tenebrosa"],
        correctAnswer: 'a3'
    },
    {
        question: "Qual o segundo planeta mais quente?",
        answers: ["Marte Merecedor", "Mercúrio Monarca", "Urano Universal", "Vênus Vitorioso"],
        correctAnswer: 'a2'
    }
];

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        window.location.href = `../resultado/resultado.html?score=${score}`;
    }
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionElements.forEach((element) => {
        element.innerHTML = `
            <div class="perguntas">
                <p class="numero">${currentQuestionIndex + 1})</p>
                <p class="pergunta">${question.question}</p>
            </div>
        `;
    });

    answerElements.forEach((button, index) => {
        button.innerHTML = question.answers[index];
        button.className = `a${index + 1}`; // Atualiza a classe do botão para corresponder à resposta
    });
}

displayQuestion();

answerElements.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedAnswer = event.target.className;
        checkAnswer(selectedAnswer);
    });
});