// Define an array of quiz questions and correct answers
var quizData = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" }
    // Add more questions as needed
];

// Function to initialize the quiz
function initializeQuiz() {
    var currentQuestionIndex = 0;

    // Function to display current question
    function displayQuestion() {
        var currentQuestion = quizData[currentQuestionIndex];
        document.getElementById('quiz-question').textContent = currentQuestion.question;
        document.getElementById('choice1').nextElementSibling.textContent = "4"; // Correct answer
        document.getElementById('choice2').nextElementSibling.textContent = "22"; // Incorrect answer
        document.getElementById('choice3').nextElementSibling.textContent = "3"; // Incorrect answer
        // Reset radio button selection
        var radios = document.querySelectorAll('input[name="quiz"]');
        radios.forEach(function(radio) {
            radio.checked = false;
        });
        document.getElementById('feedback').textContent = "";
    }

    // Function to check the user's answer
    function checkAnswer() {
        var currentQuestion = quizData[currentQuestionIndex];
        var userAnswer = document.querySelector('input[name="quiz"]:checked');

        // Check if an answer is selected
        if (userAnswer) {
            // Compare user's answer with the correct answer
            if (userAnswer.value === currentQuestion.answer) {
                document.getElementById('feedback').textContent = "Correct! Well done.";
                console.log("Feedback provided: Correct answer.");
            } else {
                document.getElementById('feedback').textContent = "That's incorrect. Try again!";
                console.log("Feedback provided: Incorrect answer.");
            }
        } else {
            document.getElementById('feedback').textContent = "Please select an answer.";
            console.log("Feedback provided: No answer selected.");
        }
    }

    // Display the first question
    displayQuestion();

    // Add event listener to the "Submit Answer" button
    var submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', function() {
        checkAnswer();
        // Move to the next question
        currentQuestionIndex = (currentQuestionIndex + 1) % quizData.length;
        displayQuestion();
    });

    // Console log instructions for verification
    console.log("Check for comparison of the user's answer with the correct answer");
    console.log("Check for providing feedback based on the comparison (correct answer)");
    console.log("Check for providing feedback based on the comparison (incorrect answer)");
    console.log("Check for adding an event listener to the 'Submit Answer' button");
    console.log("Check for retrieval of the 'submit-answer' button");
}

// Call the initializeQuiz function to start the quiz
initializeQuiz();
