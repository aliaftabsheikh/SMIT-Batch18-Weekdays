// EXECUTION CONTEXT 
// Call Stack
// Hoisting
// Temporal Dead Zone
// Block Shadowing
// Lexical Environment
// Scope Chain
// VAR & LET & CONST
// GLOBAL OBJECT
// BLOCK SCOPE
// FUNCTION SCOPE



// window  -> GLOBAL OBJECT

// var a = 10;

// {
//     var a = 20;
//     console.log(a);
// }

// console.log(a);


// console.log(a);

// var a = 10;


// var a = 10;
// x()

// function x(){
//     console.log(a);
// }





// let a = 10;

{
    let a = 20;
    console.log(a);

    {
        // let a = 30;
        console.log(a);
    }
}

console.log(a);



// function a(num1, num2) {
//     console.log("Execution of a");
//     function b() {
//         console.log("Execution  of b");

//         function c() {
//             console.log("Execution of c");

//             console.log(num1, num2);
//         }

//         c()
//     }

//     b();
// }

// a(10, 20);

