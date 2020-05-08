// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }

// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", example2);




function promptForPassword() {
    var isUppercase = false,
        isLowercase = false,
        isNumeric = false,
        isSpecialChar = false;

    var isOneCharTypeSelected =
        isUppercase || isLowercase || isNumeric || isSpecialChar;

    var userInput = prompt(
        "How many characters should the password be? Enter a number between 8 and 128"
    );
    var numCharacters = parseInt(userInput); // convert the string into a number type
    // don't need to use let since the userInput is already declared

    // validate that at least one character type has been selected
    while (!isOneCharTypeSelected) {
        userInput = prompt(
            "Would you like your password to have Uppercase characters? Answer yes or no"
        );
        isUppercase = userInput === "yes"; // convert userInput to a boolean

        userInput = prompt(
            "Would you like your password to have Lowercase characters? Answer yes or no"
        );
        isLowercase = userInput === "yes";

        userInput = prompt(
            "Would you like your password to have Numeric characters? Answer yes or no"
        );
        isNumeric = userInput === "yes";

        userInput = prompt(
            "Would you like your password to have Special characters? Answer yes or no"
        );
        isSpecialChar = userInput === "yes";

        // check if at least one character type is selected
        isOneCharTypeSelected =
            isUppercase || isLowercase || isNumeric || isSpecialChar;

        if (!isOneCharTypeSelected) {
            alert("You need to enter at least one character type");
        }
    }

    var lowercase = ["a", "b", "c"]
    var uppercase = ["A", "B", "C"]
    var specialChar = ["$", "!", "%"]
    var numbers = [1, 2, 3]

    var characterTypes = []

    if (isUppercase) {
        characterTypes.push(uppercase)
    }
    if (isLowercase) {
        characterTypes.push(lowercase)
    }
    if (isNumeric) {
        characterTypes.push(numbers)
    }
    if (isSpecialChar) {
        characterTypes.push(specialChar)
    }

    var password = generatePassword(numCharacters, characterTypes)

    // get the password element
    var passwordNode = document.getElementById('password')
    // update the value of the element
    passwordNode.innerHTML = password
}
// 2c. connect function to onclick handler

function generatePassword(num, arr) {
    var possibilityIndex = 0;
    var password = "";
    let targetArray = []

    for (let i = 0; i < num; i++) {
        targetArray = arr[possibilityIndex];
        possibilityIndex++;

        password += targetArray[Math.floor(Math.random() * targetArray.length)]

        if (possibilityIndex == arr.length) {
            possibilityIndex = 0
        }
    }

    return password;
}