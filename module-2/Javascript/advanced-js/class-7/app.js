// EXECUTION CONTEXT 
// CALL STACK 
// LEXICAL ENVIORNMENT



// function outer(){
//     var a = 10;

//     function inner(){
//         console.log(a);
//     }

//     return inner;
// }

// let innerFn = outer();
// console.log(innerFn);



// function outer() {
//     var a = 10;

//     function inner() {
//         var b = 20;

//         function innerMost() {
//             console.log(a + b);
//         }

//         innerMost()
//     }

//     inner()

// }

// outer()



// innerFn();



// Use var and value will be printed 1 to 5 instead of 6

function outer() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000)
    }
    console.log("Hello World !");
}



outer()