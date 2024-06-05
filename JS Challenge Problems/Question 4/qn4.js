/*Write a function named firstPalindrome which takes a parameter: words. Given an array of string words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

function firstPalindrome(words) {
    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            return word;
        }
    }
    return "";
}

function findPalindrome() {
    const input = document.getElementById('wordsInput').value;
    const words = input.split(',').map(word => word.trim());
    const result = firstPalindrome(words);
    document.getElementById('result').innerText = result || "No palindromic string found";
}

