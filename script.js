//Database
const questionsDatabase = {
    citizenshipQuiz: {
        "1": {
            question: "What was the last battle between Great Britain and France?",
            answers: {
                "one": "The Battle of Trafalgar",
                "two": "The Battle of Waterloo",
                "three": "The Battle of Hastings",
                "four": "The Battle of Agincourt",
                correctAnswer: "two" 
            }
        },
        "2": {
            question: "Which flower is associated with Wales?",
            answers: {
                "one": "Daffodil",
                "two": "Rose",
                "three": "Shamrock",
                "four": "Thistle",
                correctAnswer: "one" 
            }
        },
        "3": {
            question: "How often are general elections in the UK?",
            answers: {
                "one": "Every 3 years",
                "two": "Every 4 years",
                "three": "Every 5 years",
                "four": "Every 6 years",
                correctAnswer: "three" 
            }
        }
    }
};

//Global variables
currentQuestionNumber = 1;
numberOfQuestions = 3;

//DOM structure
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const nextButton = document.getElementById("nextButton");

//Functions
const displayNextQuestion = function() {
    if (currentQuestionNumber === numberOfQuestions) {
        console.log("Reached the end of the quiz")
        return
    } else {
        currentQuestionNumber++;
        let nextQuestion = generateQuestionHTML(currentQuestionNumber);
        questionContainer.innerHTML = nextQuestion;
    }   
};

const generateQuestionHTML = function(number) {
    let question = questionsDatabase.citizenshipQuiz[number].question;
    let answerOne = questionsDatabase.citizenshipQuiz[number].answers.one;
    let answerTwo = questionsDatabase.citizenshipQuiz[number].answers.two;
    let answerThree = questionsDatabase.citizenshipQuiz[number].answers.three;
    let answerFour = questionsDatabase.citizenshipQuiz[number].answers.four;

    const questionHTML = `<h2 id="question">${number}. ${question}</h2>
    <div id="answersContainer">
        <div class="possibleAnswer" id="answerA">${answerOne}</div>
        <div class="possibleAnswer" id="answerB">${answerTwo}</div>
        <div class="possibleAnswer" id="answerC">${answerThree}</div>
        <div class="possibleAnswer" id="answerD">${answerFour}</div>
    </div>`;

    console.log(questionHTML);

    return questionHTML
};

const checkAnswer = function(selectedAnswer) {
    let correctAnswer = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers.correctAnswer
    console.log(`selectedAnswer: ${selectedAnswer}`);
    console.log(`correctAnswer: ${correctAnswer}`);
};

//EventListeners
answerA.addEventListener("click", checkAnswer("one"));
answerB.addEventListener("click", checkAnswer("two"));
answerC.addEventListener("click", checkAnswer("three"));
answerD.addEventListener("click", checkAnswer("four"));
nextButton.addEventListener("click", displayNextQuestion);


//How to pass argument into EventListener Function without invoking?