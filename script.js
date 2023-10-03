// Arrays of characters to select from and array to store the randomly generated password //
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "?", "#", "*"];
var randomPassword = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Function to generate password length and content based on user input and assign input to 'randomPassword' array.  'parseInt' used to convert string to number. 'isNan' used to verify valid input of number and specify range - if not function is cancelled. Alert to inform user of required input to receive a valid result. //
function userInput() {
  randomPassword = []
  passwordLength = parseInt(prompt("Please enter a numerical value of desired password length between 8 and 128 characters."));
   if (!passwordLength) {
    alert("Canceled! Please try again by carefully following the instructions!")
    return;
   } else
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("You must enter a numerical value between 8 and 128!");
      return userInput();
   }
      alert("You will now be prompted to choose from four character types to include in your password.  You must select AT LEAST ONE option to generate a valid password.") 
   if (confirm("Would you like to include lowercase characters?")) {
    randomPassword = randomPassword.concat(alphabet);
   }
   if (confirm("Would you like to include uppercase characters?")) {
    randomPassword = randomPassword.concat(caps);
   }
    if (confirm("Would you like to include numbers?")) {
    randomPassword = randomPassword.concat(number);
   }
    if (confirm("Would you like to include special characters?")) {
    randomPassword = randomPassword.concat(special);
   }
   return true;
}
// Function to generate password based on a loop accessing the user input data (as stored in 'randomPassword' array) to return a password based on the loop parameters //
function generatePassword() { 
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomSelections = Math.floor(Math.random() * randomPassword.length);
    password = password + randomPassword[randomSelections];
  }
  return password;
}
// Write password to the #password input
// Will use the password result from 'generatePassword' function if 'userOpions' function (user input) returns a valid result //
function writePassword() {
    userInput();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



