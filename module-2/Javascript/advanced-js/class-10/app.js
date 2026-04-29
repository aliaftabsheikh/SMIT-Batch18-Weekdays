// Functions 


// Function Definition
// Funtion Statement
// Function Declaration
// Function Expression
// Function Named Expression
// Anonymous Function
// Arrow Function Expression
// IIFE (Immediately Invoked Function Expression)
// First Class Function
// Function Invocation/ Calling
// Function Parameters/ Arguments
// Callback Function
// Higher Order Function


//! Function Definition / Statement / Declaration

// x()

// console.log(y());


// function x(){
//     console.log("Hello World from Function Definition");
// }


//! Function Expression 

// var y = function(){
//     console.log("Hello World from Function Expression");
// } 


//! Function Named Expression




// let z = function abc (){

//     console.log(abc())
//     console.log("Hello World from Function Named Expression");
// };

// z()


//! IIFE (Immediately Invoked Function Expression)


// (function(){
//     let a = 10

//     console.log("Hello World from IIFE", a);
// })()

//! Anonymous Function

// function x(y){
//     y()
//     console.log("Hello World from Anonymous Function");
// }



// x(
//     function(){
//     console.log("Hello World from y Function");
// }
// )

// !ARROW FUNCTION 

// function greet(name){
// return `Hello ${name}`
// }

// let greet = (name, age) => 'Hello ' + name + ', you are ' + age + ' years old.'

// console.log(greet("Ali", 25));


// setTimeout(() => console.log("Hello World from setTimeout"), 2000);   



// let x = ()=>{
//     return "Hello World from Arrow Function"
// }

// console.log(x());

//! ANONYMOUS ARROW FUNCTION 

// () => {

// }



// !First Class Function  / First Class Citizen

x(y)


function x(y){
    y()
    console.log("Hello World from Function x");
}

function y(){
    console.log("Hello World from Function y");
}
