/*Given an integer num, write a function that repeatedly adds all its digits until the result has only one digit, and return it.
*/

function calculateSingleDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

function calculateSingleDigit() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
    } else {
        const result = calculateSingleDigitSum(number);
        document.getElementById('result').innerText = `The single digit sum is: ${result}`;
    }
}
