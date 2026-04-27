// CLOSURE 


// function outer() {
//     let a = 10;

//     function inner() {
//         console.log(a);
//     }

//     return inner;
// }

// let innerFunc = outer();
// console.log(innerFunc); 

// innerFunc();



// function outer() {
//     let a = 10;
//     console.log(a);
//     function inner() {
//         let b = 20;
//         console.log(b);
//         function innerMost() {
//             let c = 30;
//             console.log(c);
//         }
//         innerMost();
//     }
//     inner()
// }
// outer();


function outer() {
    for (var i = 1; i <= 5; i++) {

        function close(iter) {
            setTimeout(function () {
                console.log(iter);
            }, 1000 * iter);
        }

        close(i);

    }

    console.log("Hello World !");

}

outer()


