//Question#1
function checkCharacter(input) {
    const code = input.charCodeAt(0);
    
    if (code >= 48 && code <= 57) {
        return "Number";
    } else if (code >= 65 && code <= 90) {
        return "Uppercase Letter";
    } else if (code >= 97 && code <= 122) {
        return "Lowercase Letter";
    } else {
        return "Not a valid character";
    }
}
const userInput = prompt("Enter a character:");
const result = checkCharacter(userInput);

console.log(`The input "${userInput}" is ${result}`);


//Question#2
function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log("Both integers are equal");
    }
}
const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

compareIntegers(num1, num2);

//Question#3
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
const uerInput = parseFloat(prompt("Enter a number:"));

if (isNaN(userInput)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    const result = checkNumberType(userInput);
    console.log(`The number ${userInput} is ${result}`);
}

//Question#4
function isVowel(character) {
    const lowerCaseChar = character.toLowerCase();
    return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u';
}
const Input = prompt("Enter a character:");
const Result = isVowel(Input);

console.log(`Is "${userInput}" a vowel? ${Result}`);




//Question#5
const correctPassword = "zakia123";
const userPassword = prompt("Enter your password:");
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}


//Question#6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//Question#7
const UserInput = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (userInput >= 0 && userInput < 1200) {
    console.log("Good morning!");
} else if (userInput >= 1200 && userInput < 1700) {
    console.log("Good afternoon!");
} else if (userInput >= 1700 && userInput < 2100) {
    console.log("Good evening!");
} else if (userInput >= 2100 && userInput <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid input. Please enter a valid time in 24-hour clock format.");
}


