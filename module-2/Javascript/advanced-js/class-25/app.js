// SPREAD OPERATOR

// ARRAYS 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];



// const arr3 = [...arr1, ...arr2];

// console.log(arr3); 


// const summerFruits = ['mango', 'watermelon', 'grapes'];
// const winterFruits = ['orange', 'apple', 'banana'];

// const allFruits = [...summerFruits, ...winterFruits];
// console.log(allFruits);

// OBJECTS

// const obj1 = {
//     a: 1,
//     b: 2
// };


// const obj2 = {
//     ...obj1,
//     c: 3
// };

// console.log(obj2);


//! REST PARAMETERS
// function x(num1, num2, ...args) {


//     console.log(num1);
//     console.log(num2);

//     for(const arg of args){
//         console.log(arg);
//     }

//     console.log("================================");
// }


// const arr = [1, 2, 3, 4, 5];
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// x(...arr);
// x(...arr1);
// x(...arr2);

//! SPREAD OPERATOR 



//! ENHANCE OBJECT LITERALS 


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// const person1 = {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles"
// }





// const { name, age, city } = person
// const { name: name1, age: age1, city: city1 } = person1

// console.log(name);
// console.log(age);
// console.log(city);


// // --------------------

// console.log(name1);
// console.log(age1);
// console.log(city1);




const name = "John";
const age = 30;
const city = "New York";


const person = {
    name,
    age,
    city
}

console.log(person);


// TERNARY OPERATOR
// MODULES 
// OPTIONAL CHAINING