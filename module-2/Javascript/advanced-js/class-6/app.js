// HOISTING
// Execution Context
// Call Stack
// Temporal Dead Zone
// Variable Environment (Global, Function, Block)
// Var/ let and const
// Box Shadowing
// Scope chain
// Lexical Environment
// CLOSURES 

// console.log(a); // undefined

// let a = 10;

// var a = 10;

// {
//     var a = 20
//     console.log(a);
// }

// console.log(a)



// Closure create when execution context move into his lexical parent 


// A clousre along with its lexical environment forms a closure.


function outer() {
    let a = 10;
    let b = 20;

    function inner() {
        console.log(a + b);
    }

    return inner
}

const z = outer();
console.log(z)

z()