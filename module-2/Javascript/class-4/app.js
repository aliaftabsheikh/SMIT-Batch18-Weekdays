var a = 2;

// BODMAS


// // console.log(a++ + --a * a++);

// console.log(--a / (++a + a-- ) * --a + --a);
//               1 /  6 * 0 -1 

//               0.16 * 0  -1 

//              -1

// Stepwise Evaluation:
                  
           

// -1 
// 2
// 0
//0.33
// 0.5           
// 1
// 1.66



// console.log(a);



// var a = 5;
// var b = "20";


// console.log(a - b);


// var valueOne = +prompt("Enter first value: ");

// var valueTwo = +prompt("Enter second value: ");
var valueOne = Number(prompt("Enter first value: ", 0));

var valueTwo = Number(prompt("Enter second value: ", 0));




// var calulatedValue = +valueOne + +valueTwo;
var calulatedValue = Number(valueOne) + Number(valueTwo);

console.log("The value is: " + calulatedValue);
alert("The value is: " + calulatedValue);
 