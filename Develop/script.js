// // Assignment Code
 var generateBtn = document.querySelector("#generate");
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var symbols =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userLength=""//undefined because the user fills in this array//they are not picking from a prerendered array. 
var userSymbols;// i have to create user variables to store the users input to call back later
var userNumbers;//this helps the program call back the numbers or what have you when creating the password
var userUpperCase;
var userLowerCase;


//i need to create the function that is being called back to in generatePassword
function generatePassword(){
    userLength = prompt("How many Characters in your Password?");

    if(userLength < 7 || userLength > 128) {
      alert ("password must be between 8 and 128");
      userLength = prompt("How many Characters in your Password?");
  }  
//i need to set the critera for the password. i need to create prompts for the user to tell me what they want. by storing the user responise in variables i can call back to it later...at least i think i can.
    userSymbols=confirm("do you want to use symbols?");
    userNumbers=confirm("do you want to use numbers?");
    userUpperCase=confirm("do you want to use upper case lettering?");
    userLowerCase=confirm("do you want to use lower case lettering?");



 var userPassword=[];
//now is the 4 logic strings for the project wilson mentioned. //i think i need to switch what gets concated//
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



var newPassword = ""

for (var i =0; i <userLength; i++);{
  newPassword=newPassword + userPassword[Math.floor(Math.random() * userPassword.length)];
}
return newPassword;
  
}
// // Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}








    




// // Add event listener to generate button "my start event from the pseudo code"
generateBtn.addEventListener("click", writePassword);//every time i click the genreate btn it runs the 'write password' code which includes the logic for generating and asking the requists for the password. 


// if (userSymbols === true && userNumbers ===true  && userUpperCase ===true && userLowerCase === true); {
//   storedPassword.push(storedPassword.concat(symbols,upperCase,lowerCase,numbers));
// }

// if (userSymbols ===true && userNumbers ===true && userUpperCase ===true); {
//   storedPassword.push(storedPassword.concat(symbols,upperCase,numbers));
// }

// if (userSymbols && userNumbers && userLowerCase); {
//   storedPassword = storedPassword.concat(symbols,lowerCase,numbers);
// }

// if (userSymbols && userNumbers); {
//   storedPassword = storedPassword.concat(symbols,numbers);
// }
// if (userSymbols && userUpperCase); {
//   storedPassword = storedPassword.concat(symbols,upperCase);
// }
// if (userSymbols && userLowerCase); {
//   storedPassword = storedPassword.concat(symbols,lowerCase);
// }
// if (userNumbers && userUpperCase && userLowerCase);{
//   storedPassword = storedPassword.concat(numbers,upperCase,lowerCase);
// }
// if (userNumbers && userUpperCase);{
//   storedPassword = storedPassword.concat(numbers,upperCase);
// }
// if (userNumbers && userLowerCase);{
//   storedPassword = storedPassword.concat(numbers,lowerCase);
// }
// if (userUpperCase && userLowerCase);{
//   storedPassword=storedPassword.concat(upperCase,lowerCase);
// }

// // if (userSymbols);{
// //   storedPassword = symbols;
// // }
// // if (userNumbers);{
// //   storedPassword = numbers;
// // }

// // if (userUpperCase);{
// //   storedPassword = upperCase
// // }
// // if (userLowerCase);{
// //   storedPassword = lowerCase;
// // }
//  ;//okay so they all get pushed to my userPassword array we are on the right track//
//  console.log(storedPassword);

// var newPassword="";

// for (var i = 0; i < length; i++) {
//   newPassword = storedPassword[Math.floor(Math.random() * storedPassword.length)];
//   var password = newPassword.join(storedPassword);
//   password.appendChild(newPassword);
//   console.log(newPassword);
// }

