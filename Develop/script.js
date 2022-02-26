// Assignment code here
var charcount;
var chartypes;

var generatePassword = function() {
  charcount = window.prompt("Password length between 8 - 25: ");
  if (charcount >= 8 && charcount <= 25) {
    // var random = Math.random(Math.min(), Math.max()*(min + max));    
    console.log(charcount);    
    return charcount;
  } else {
      
    // window.alert("Please enter an acceptable password length.");
    generatePassword();
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

randomChar = function(min, max) {
  min = 8;
  max = 25;
  var random = Math.random(Math.min(), Math.max()*(min + max)); 
  console.log(random);

}
 


// Write password to the #password input
var writePassword = function() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  writePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

