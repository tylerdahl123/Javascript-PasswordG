// // Assignment Code
 var generateBtn = document.querySelector("#generate");

var numbers=["0","1","2","3","4","5","6","7","8","9"];
var symbols =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userLength=""//first undefined variable for the password
var userSymbols;
var userNumbers;
var userUpperCase;
var userLowerCase;

// // Write password to the #password input
function writePassword() {
  userLength = prompt("How many Characters in your Password?");
  
  while(userLength < 7 || userLength > 128) {
    alert ("password must be between 8 and 128");
    userLength = prompt("How many Characters in your Password?");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


