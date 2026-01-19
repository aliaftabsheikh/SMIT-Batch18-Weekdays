// STATIC Function 


// function greeting(){
//     console.log("Hello Ali");
// }


// function call/invoke
// greeting();
// greeting();


// Dynamic Function
//! Parameter
// function greeting(name, age) {
//     console.log(`My name is ${name} and age is ${age}`);
// }

// greeting("Ali", 24);
//           //! Argument

// greeting("Ahmed", 30);


// var guests = [
//     {
//         name: "Ali",
//         age: 24
//     },

//     {
//         name: "Ahmed",
//         age: 30
//     },

//     {
//         name: "Adeel",
//         age: 28
//     }
// ];

// for(var i = 0; i < guests.length; i++){
//     greeting(guests[i].name, guests[i].age);
// }


// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     var theSec = now.getSeconds();
//     var theMilli = now.getMilliseconds();
//     console.log("Current time: " + theHr + ":" + theMin + ":" + theSec+ ":" + theMilli);
// }

// for(var i = 0; i < 100; i++){
//     tellTime();
// }


// var guestName = prompt("Enter your name: ");
// var guestAge = prompt("Enter your age: ");

// greeting(guestName, guestAge);



function add(num1, num2){
    var sum = num1 + num2;
    var  a = 10;
    
    return sum
    console.log("This line is after return statement");

}

var result = add(5, 20);   //25
var result1 = add(5, 25);  //30

console.log("The sum is: " + result);
console.log("The sum is: " + result1);