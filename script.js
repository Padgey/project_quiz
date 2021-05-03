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
let currentQuestionNumber = 1;
let numberOfQuestions = 3;
let currentQuestionIsUnanswered = true;
let numAnsweredQuestions = 0;
let numCorrectAnswers = 0;

//DOM structure
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const nextButton = document.getElementById("nextButton");

//Functions
const resetQuestionStyling = function() {
    one.style.border = "medium none";
    one.style.backgroundColor = "rgb(75, 75, 75)";
    two.style.border = "medium none";
    two.style.backgroundColor = "rgb(75, 75, 75)";
    three.style.border = "medium none";
    three.style.backgroundColor = "rgb(75, 75, 75)";
    four.style.border = "medium none";
    four.style.backgroundColor = "rgb(75, 75, 75)";
};
const displayNextQuestion = function() {
    if (currentQuestionNumber === numberOfQuestions) {
        console.log("Reached the end of the quiz");
        return
    } else {
        console.log("Changing currentQuestionIsUnanswered to true...");
        currentQuestionNumber++;
        generateQuestionHTML(currentQuestionNumber);
        resetQuestionStyling();
        currentQuestionIsUnanswered = true;
        return
    };   
};
const generateQuestionHTML = function(number) {
    let questionText = questionsDatabase.citizenshipQuiz[number].question;
    let answerOne = questionsDatabase.citizenshipQuiz[number].answers.one;
    let answerTwo = questionsDatabase.citizenshipQuiz[number].answers.two;
    let answerThree = questionsDatabase.citizenshipQuiz[number].answers.three;
    let answerFour = questionsDatabase.citizenshipQuiz[number].answers.four;

    question.innerHTML = questionText;
    one.innerHTML = answerOne;
    two.innerHTML = answerTwo;
    three.innerHTML = answerThree;
    four.innerHTML = answerFour;

    let questionHTML = document.getElementById("questionContainer");
    console.log(questionHTML);
    return
};
const updateProgress = function() {
    //Progress Bar
    //Score 
    let percentageCorrect = Math.round(numCorrectAnswers / numAnsweredQuestions * 100);
    let progressString = 
        `Question ${currentQuestionNumber} of ${numberOfQuestions} | Score - ${numCorrectAnswers} out of ${numAnsweredQuestions} - ${percentageCorrect}%`;
    progressPercentage.innerHTML = progressString;
};
const checkAnswer = function(selectedAnswer) {
    let correctAnswer = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers.correctAnswer;
    if (selectedAnswer !== correctAnswer) {
        console.log("Incorrect answer!");
        numAnsweredQuestions++;
        return false
    } else {
        console.log("Correct answer!");
        numAnsweredQuestions++;
        numCorrectAnswers++;
        return true
    };
};
const executeAnswer = function(selectedAnswer) {
    if (currentQuestionIsUnanswered) {
        let answerIsCorrect = checkAnswer(selectedAnswer);
        let answerDiv = document.getElementById(selectedAnswer);
        updateProgress();
        currentQuestionIsUnanswered = false;
        if (answerIsCorrect) {
            answerDiv.style.backgroundColor = "darkgreen";
            answerDiv.style.borderLeft = "4px solid black";
        } else {
            answerDiv.style.backgroundColor = "darkred";
            answerDiv.style.borderLeft = "4px solid black";
        };
    } else {
        console.log("Question has already been answered");
    };
};



//EventListeners
one.addEventListener("click", function() {
    console.log("Executing answer one...");
    executeAnswer("one");
});
two.addEventListener("click", function() {
    executeAnswer("two");
});
three.addEventListener("click", function() {
    executeAnswer("three");
});
four.addEventListener("click", function() {
    executeAnswer("four");
});
nextButton.addEventListener("click", displayNextQuestion);