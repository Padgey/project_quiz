//Database
const questionsDatabase = {
    citizenshipQuiz: {
        1: {
            question: "What was the last battle between Great Britain and France?",
            answers: {
                1: "The Battle of Trafalgar",
                2: "The Battle of Waterloo",
                3: "The Battle of Hastings",
                4: "The Battle of Agincourt",
                correctAnswer: 2 
            }
        },
        2: {
            question: "Which flower is associated with Wales?",
            answers: {
                1: "Daffodil",
                2: "Rose",
                3: "Shamrock",
                4: "Thistle",
                correctAnswer: 1 
            }
        },
        3: {
            question: "How often are general elections in the UK?",
            answers: {
                1: "Every 3 years",
                2: "Every 4 years",
                3: "Every 5 years",
                4: "Every 6 years",
                correctAnswer: 3 
            }
        }
    }
};

//DOM structure
const question = document.getElementById("question");
const nextButton = document.getElementById("nextButton");

//Functions
const nextQuestion = function() {
    let questionNumber = question.innerHTML[0];
    console.log(`${questionNumber}`);
};

//EventListeners
nextButton.addEventListener("click", nextQuestion);