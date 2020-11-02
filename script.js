// // Assignment Code
 var generateBtn = document.querySelector("#generate");
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var symbols =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userLength=""//undefined because the user fills in this array//they are not picking from a prerendered array. //
var userSymbols;// i have to create user variables to store the users input to call back later//
var userNumbers;//this helps the program call back the numbers or whatever when creating the password//
var userUpperCase;
var userLowerCase;
 
//I need to create the function that is being called back to in generatePassword downbelow. i was trying to make a new function entirely before. make sure to slow down and read all the code.//
function generatePassword(){
    userLength = prompt("How many characters in your Password?");
//user length has a new value cause the user filled them in. 
    while (userLength < 7 || userLength > 128) {
      alert ("password must be between 8 and 128");
      userLength = prompt("How many characters in your Password?");
  }  

while(userLength < 7 || userLength > 127){
  alert("You need to pick a number between 8 and 128");
  userLength = prompt("Now...how many characters in your password?");
}
//i need to set the critera for the password. i need to create prompts for the user to tell me what they want. by storing the user responise in variables i can call back to it later...at least i think i can.//
  
var userSymbols=confirm("Should we include Symbols?");
var userNumbers=confirm("Should we include Numbers?");
var userUpperCase=confirm("How about Upper Case Letters?");
var  userLowerCase=confirm("Lower Case Letters?");

while ( userNumbers === false && userLowerCase === false && userSymbols === false && userUpperCase === false) {
alert("You need at least one criterion");
userSymbols = confirm ("Should we add Symbols this time?");
userNumbers = confirm ("Should we add Numbers this time?");
userUpperCase= confirm("How about Upper Case Letters?");
userLowerCase = confirm("Lower Case Letters?");
}


 var userPassword=[];// this will contain the users inputs i.e. symbols, numbers, uppercase, or lowercase,
//now is the 4 logic strings for the project wilson mentioned. //i think i need to switch what gets concated// my previous logic was to complicated used to many ifs. because the else is the opposite of the if so it has the no option built into it.// 
if (userSymbols){
  userPassword = userPassword.concat(symbols);
}
if (userNumbers){
  userPassword = userPassword.concat(numbers);
}
if (userUpperCase){
  userPassword = userPassword.concat(upperCase);
}
if (userLowerCase){
  userPassword=userPassword.concat(lowerCase);
}
console.log(userPassword);
//i need to force the user to pick at least one choice

var newPassword = ""// this is the variable for the random number that the loop will push out//
//this is the loop that pops out the random character from the array//
for (var i =0; i <userLength; i++){
  newPassword=newPassword + userPassword[Math.floor(Math.random() * userPassword.length)];//this makes newPassword = whatever the user put in [using the random numbergenerated rounded to the nearest number times the total amount within userPassword].//
}

return newPassword; //  return makes sure that this is the final number displayed so when it called up in the next 'writePassword' section it will show this number when generatePassword is brought up.//
}
//i wasn't running my loop and return within the same function so it was not showing up properly.//



function writePassword() {
  
  var password = generatePassword();//whenever i type password will bring back what ever the generate password button brought back
  var passwordText = document.querySelector("#password");//whenever type passwordText it will select the portion on the html document that has the id="password"//

  passwordText.value = password;

}


// // Add event listener to generate button "my start event from the pseudo code"//
generateBtn.addEventListener("click", writePassword);//every time the user  clicks the generatebtn it runs the 'write password' code which includes the logic for generating and asking the requists for the password.// 
//quick change for the read me to look at it