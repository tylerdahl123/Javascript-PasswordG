// // Assignment Code
 var generateBtn = document.querySelector("#generate");

var numbers=["0","1","2","3","4","5","6","7","8","9"];
var symbols =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userLength=""//first undefined variable for the password
var userSymbols;// i have to create user variables to store the users input to call back later
var userNumbers;//this helps the program call back the numbers or what have you when creating the password
var userUpperCase;
var userLowerCase;

// // Write password to the #password input
function writePassword() {
  userLength = prompt("How many Characters in your Password?");
  
  while(userLength < 7 || userLength > 128) {
    alert ("password must be between 8 and 128");
    userLength = prompt("How many Characters in your Password?");
  }
//i need to set the critera for the password. i need to create prompts for the user to tell me what they want. by storing the user responise in variables i can call back to it later...at least i think i can.
    userSymbols=confirm("do you want to use symbols?");
    userNumbers=confirm("do you want to use numbers?");
    userUpperCase=confirm("do youwant to use upper case lettering?");
    userLowerCase=confirm("do you want to use lower case lettering?");
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//every time i click the genreate btn it runs the 'write password' code which includes the logic for generating and asking the requists for the password. 


