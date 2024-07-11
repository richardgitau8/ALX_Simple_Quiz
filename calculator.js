// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Cannot divide by zero';
    }
    return number1 / number2;
}
document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const addBtn = document.getElementById('add');
    const subtractBtn = document.getElementById('subtract');
    const multiplyBtn = document.getElementById('multiply');
    const divideBtn = document.getElementById('divide');
    const resultSpan = document.getElementById('calculation-result');

    // Event listener for the addition button
    addBtn.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        const result = add(num1, num2);
        resultSpan.textContent = result;
    });

    // Event listener for the subtraction button
    subtractBtn.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        const result = subtract(num1, num2);
        resultSpan.textContent = result;
    });

    // Event listener for the multiplication button
    multiplyBtn.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        const result = multiply(num1, num2);
        resultSpan.textContent = result;
    });

    // Event listener for the division button
    divideBtn.addEventListener('click', function() {
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        const result = divide(num1, num2);
        resultSpan.textContent = result;
    });
});
