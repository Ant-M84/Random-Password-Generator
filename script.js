
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "?", "#", "*"];
var randompassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var acceptChoice = userChoice();
    if(acceptChoice) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

  passwordText.value = password;
    }
  }

function generatePassword() { 
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomvalue = Math.floor(Math.random() * randompassword.length);
    password = password + randompassword[randomvalue];
  }
  return password;
}

function userChoice() {
  randompassword = []
  passwordLength = parseInt(prompt("Please enter a numerical value of desired password length between 8 and 128 characters."));
   if (!passwordLength) {
    alert("Cancelled!")
    return;
   } else
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("You must enter a numerical value between 8 and 128!");
      return userChoice();
   }
   if (confirm("Would you like to include lowercase characters?")) {
    randompassword = randompassword.concat(alphabet);
   }
   if (confirm("Would you like to include uppercase characters?")) {
    randompassword = randompassword.concat(caps);
   }
    if (confirm("Would you like to include numbers?")) {
    randompassword = randompassword.concat(number);
   }
    if (confirm("Would you like to include special characters?")) {
    randompassword = randompassword.concat(special);
   }
   return true;
  }

// https://www.youtube.com/watch?v=v2jfGo7ztm8&ab_channel=DanielVega //

