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
        },
        "4": {
            question: "Which charity works to preserve important buildings?",
            answers: {
                "one": "NSPCC",
                "two": "The Red Cross",
                "three": "Age UK",
                "four": "The National Trust",
                correctAnswer: "four" 
            }
        },
        "5": {
            question: "What is the capital of Scotland?",
            answers: {
                "one": "Edinburgh",
                "two": "London",
                "three": "Belfast",
                "four": "Cardiff",
                correctAnswer: "one" 
            }
        },
        "6": {
            question: "Which department produces the the official handbook for the test?",
            answers: {
                "one": "The English Office",
                "two": "The Home Office",
                "three": "The State Office",
                "four": "The Foreign Office",
                correctAnswer: "two" 
            }
        },
        "6": {
            question: "Which department produces the the official handbook for the test?",
            answers: {
                "one": "The English Office",
                "two": "The Home Office",
                "three": "The State Office",
                "four": "The Foreign Office",
                correctAnswer: "two" 
            }
        },
        "7": {
            question: "In which year was there a major outbreak of plague in London?",
            answers: {
                "one": "1465",
                "two": "1565",
                "three": "1665",
                "four": "1765",
                correctAnswer: "three" 
            }
        },
        "8": {
            question: "In which county is Stonehenge?",
            answers: {
                "one": "Lincolnshire",
                "two": "Lothians",
                "three": "Dorset",
                "four": "Wiltshire",
                correctAnswer: "four" 
            }
        },
        "9": {
            question: "What is the name given to rented additional land which people use to grow fruits and vegetables?",
            answers: {
                "one": "Allotment",
                "two": "Roomage",
                "three": "Spacage",
                "four": "Garden",
                correctAnswer: "one" 
            }
        },
        "10": {
            question: "What do many theatres produce at Christmas time?",
            answers: {
                "one": "New Years Celebration",
                "two": "Tragedy Play",
                "three": "Huge Display",
                "four": "Pantomime",
                correctAnswer: "four" 
            }
        },
        "11": {
            question: "Who became Prime Minister during WWII?",
            answers: {
                "one": "Robert Walpole",
                "two": "Tony Blair",
                "three": "Margaret Thatcher",
                "four": "Winston Churchill",
                correctAnswer: "four" 
            }
        },
        "12": {
            question: "Who do you write to to make a complaint about the police?",
            answers: {
                "one": "The Chief Constable",
                "two": "Your local MP",
                "three": "The House of Lords",
                "four": "The House of Commons",
                correctAnswer: "one" 
            }
        }
    }
};

//Global variables
let currentQuestionNumber = 1;
let numberOfQuestions = Object.keys(questionsDatabase.citizenshipQuiz).length;
let currentQuestionIsUnanswered = true;
let numAnsweredQuestions = 0;
let numCorrectAnswers = 0;

//DOM structure
const progressTracker = document.getElementById("progressTracker");
const progressBar = document.getElementById("progressBar");
const progressPercentage = document.getElementById("progressPercentage")
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const nextButton = document.getElementById("nextButton");

//Functions
const loadQuiz = function() {
    //Generate progress bars
    for (let i = 1; i < numberOfQuestions + 1; i++) {
        let generatedDiv = document.createElement("div");
        generatedDiv.setAttribute("class", "progressNode");
        generatedDiv.setAttribute("id", `node${i}`);
        generatedDiv.innerHTML = i;
        progressBar.appendChild(generatedDiv);
    };

    //Generate progress percentage
    let progressString = `Question - ${currentQuestionNumber} of ${numberOfQuestions}`;
    progressPercentage.innerHTML = progressString;

    //Generate first question
    question.innerHTML = `${currentQuestionNumber}. ${questionsDatabase.citizenshipQuiz[currentQuestionNumber].question}`;
    one.innerText = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers["one"];
    two.innerText = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers["two"];
    three.innerText = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers["three"];
    four.innerText = questionsDatabase.citizenshipQuiz[currentQuestionNumber].answers["four"];
};
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
        alert("Reached the end of the quiz");
        return
    } else if (currentQuestionIsUnanswered === true) {
        alert("Answer the question before moving on!");
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
const updateProgress = function(answerIsCorrect) {
    //Progress Bar
    let currentQuestionNode = document.getElementById(`node${currentQuestionNumber}`);
    if (answerIsCorrect === true) {
        currentQuestionNode.style.backgroundColor = "green";
    } else {
        currentQuestionNode.style.backgroundColor = "red";
    };

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
        updateProgress(answerIsCorrect);
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

//Generate Quiz
loadQuiz();