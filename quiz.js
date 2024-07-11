// quiz.js

// Define the correct answer
const correctAnswer = "4";

// Function to check the user's answer
function checkAnswer() {
    // Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        // Get the user's answer
        const userAnswer = selectedOption.value;

        // Compare with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // No answer selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
