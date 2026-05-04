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


// Callback Function

function x(y){
    console.log("Inside x function");
    y();
}

function y(){
    console.log("Inside y function");
}

x(y);



setTimeout(function(){  
    console.log("Inside setTimeout function");
}, 2000)

function infinteLoop(){
    let count = 0;
    while(count < 30000){
        console.log("Inside infinteLoop function", count);
        count++;
    }
}

infinteLoop();


// ....