// CLOSURES 

// function outer(){
//     let a = 10


//     return function inner(){
//         return a
//     }
// }

// let z = outer()()

// console.log(z) // [Function: inner]


// function a(num1, num2) {
//     console.log("Executing a")

//     function b() {
//         console.log("Executing b")
//         function c() {
//             console.log("Executing c")
//             console.log(num1 + num2)
//         }

//         c()
//     }
//     b()
// }
// a(10, 20)




// setInterval(function () {
//     setTimeout(function () {
//         console.log("Hello")
//     }, 3000)
// }, 1000)

// function outer() {
//     for (var i = 1; i <= 5; i++) {
//         function close(iter) {
   
//             setTimeout(function () {
//                 console.log(iter)
//             }, 1000 * iter)
//         }
//         close(i)
//     }

//     console.log("Hello World")
// }

// outer()
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////


// FUNCTIONS 


// Function Statement 
// Function Definition
// Function Expression
// Function Declaration
// Funtion named Expressions
// Anonymous Functions 
// First class functions 
// IIFE functions
// Function Invocation 


// Function Definition / Statement / Declaration 

x()

function x(){

}

// Function Expression 

b()

var b = function(){


}


// Function Calling / Invocation 

// x()