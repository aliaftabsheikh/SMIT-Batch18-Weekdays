// FUNCTIONS IN JAVASCRIPT

// function is a block of code that can performed a specific task.
// Parameter

// function greeting (firstName, lastName) {  // function declaration){
//    console.log("Hello " + firstName + " " + lastName);
// }

// greeting("Ahmad", "Khan")  // Arguement 
// greeting("Waqar", "Arshad")  // Arguement 


// function add(num1, num2) {
//     var sum = num1 + num2;

//     console.log("The sum is: " + sum);

// //   return sum;
// }

// console.log("Value access outside the function:  " + add(5, 10) ); 
// console.log("Value access outside the function:  " + add(5, 30) ); 


// var x = 10;

// function a(){
// x = 20;

// return x;
// }

// console.log("Outside the function: " + x);
// a();

// console.log("Outside the function after function call: " + x);


//! switch statements


var dayOfWk = "Sun";

// if (dayOfWk === "Sat" || dayOfWk === "Sun") {
//     console.log("Corporate off!");
// }
// else if (dayOfWk === "Fri") {
//     console.log("Last deadlines !");
// }
// else {
//     console.log("Shoot me now!");
// }

switch(dayOfWk){
    case "Sat": console.log("Sat Corporate off!");  break;
    case "Sun": console.log("Sun Corporate off!");  break;
    case "Fri": console.log("Last deadlines !");  break;
    default: console.log("Shoot me now!");
    }