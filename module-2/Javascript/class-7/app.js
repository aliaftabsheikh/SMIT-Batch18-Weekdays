// ===
// ==
// !==

// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to


// console.log(10 > 11); 

// var secretNumber = prompt("Enter the secret number between 1 to 5");

// var guessNumber = prompt("Guess a number between 1 to 5");

// if(guessNumber > secretNumber){
//     alert("Your guess is too high!");
// }
// else if(guessNumber < secretNumber){
//     alert("Your guess is too low!");
// }
// else {
//     alert("Congratulations! You guessed it right.");
// }




// var userName = prompt("Enter your name:");

// if(userName === "Ali"){
//     alert("Welcome back, Ali!");
// }else{
//     alert("Hello, " + userName + "!");
// }

// if(userName !== "Ali"){
//     alert("Hello, " + userName + "!");
// }



// console.log(true && true && true && true && true && true && false); 

// console.log(false || false ||false || false || false || false || true); 





// var userName = prompt("Enter your name:");
// var userAge = prompt("Enter your age:");

// if(userName === "Waqar" || userAge >= 18){
//     alert("Welcome back, " + userName + "! You are eligible to access this content.");
// }else {
//     alert("Sorry " + userName + ", you are not eligible to access this content.");
// }



var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

if (firstName === "" || lastName === "") {
    alert("Error: Both first name and last name are required.");
}
    else {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "! Welcome to our website.");
}



