

function checkAnswer() {
   
    var correctAnswer = "4";

    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
     if (userAnswer) {
        
        if (userAnswer.value == correctAnswer) {
        
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
           
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
       
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
