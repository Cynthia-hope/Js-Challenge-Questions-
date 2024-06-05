/*Write a JavaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders.
*/ 
function checkAgeCategory(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age < 18) {
        return "Minor";
    } else if (age >= 18 && age <= 36) {
        return "Youth";
    } else {
        return "Elder";
    }
}

const yearOfBirth = prompt("Please enter your year of birth:");
if (yearOfBirth) {
    const category = checkAgeCategory(yearOfBirth);
    console.log(`You are a ${category}.`);
} else {
    console.log("No year of birth entered.");
}
