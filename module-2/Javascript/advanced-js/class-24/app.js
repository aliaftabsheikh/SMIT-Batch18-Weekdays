// EXPONENTIATION OPERATOR

// console.log(2 ** 3); // 8
// console.log(3 ** 4);  // 81


//! DESTRUCTURING

//* Object Destructuring

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// const {name, age, city} = person

// console.log(name); // John
// console.log(age);
// console.log(city);

// const person1 = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const {name: personName, age: personAge, city: personCity} = person1


// console.log(personName); // John
// console.log(personAge);
// console.log(personCity);


//* ARRAY DESTRUCTURING

// const person = ["John", 30, "New York"];

// const [name, ,  city] = person;

// console.log(name); // John
// // console.log(age);
// console.log(city);


// const dummyData = [
//     {
//         name: "John",
//         age: 30,
//         city: "New York"
//     },
//     {
//         name: "Jane",
//         age: 25,
//         city: "Los Angeles"
//     }
// ]

// const {name, age, city} = dummyData[0]
// const {name: janeName, age: janeAge, city: janeCity} = dummyData[1]

// console.log(name); // John
// console.log(age);
// console.log(city);

// console.log(janeName); // Jane
// console.log(janeAge);
// console.log(janeCity);





// DEFAULT PARAMETERS

// function greet(name = "Guest") {
//     return `Hello, ${name}!`;
// }

// console.log(greet("John")); // Hello, John!
// console.log(greet()); // Hello, undefined!



// REST PARAMETERS


function randomNumbers (num1, num2, ...args) {
    console.log(num1);
    console.log(num2);
    
    for (const arg of args) {
        console.log(arg);
    }

    console.log("-------------------");
}


randomNumbers(1, 2, 3, 4, 5, 6)
randomNumbers(1, 2, 3, 4)
randomNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
randomNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)



// HOME WORK 

// - Spread Operator
// - Enhanced Object Literals

// Nvdia rtx spark documentary : https://www.nvidia.com/en-tw/gtc/taipei/keynote/?nvid=nv-int-unbr-821150

