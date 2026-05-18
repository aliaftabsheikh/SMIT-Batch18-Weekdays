// MAP 

// Return a new array with the results of calling a provided function on every element in the calling array.
// Higher order function that takes a callback function as an argument and applies it to each element in the array, returning a new array with the transformed values.
// Can't modify the original array, but instead creates a new array with the results of the transformation.

// const numbers = [1, 2, 3, 4, 5, 6];

// Example 1: Using map to double each number in the array

// const doubledNumbers = numbers.map((item, index)=>{
//     // console.log(`Item: ${item}, Index: ${index}`);
//     // return item * 2;
//     // console.log(item * 2);
// })

// console.log(doubledNumbers)


// Example 2: Using map to extract a specific property from an array of objects

const users = [
    {
        name: 'John',
        age: 30,
        profession: 'Developer'
    },
    {
        name: 'Jane',
        age: 25,
        profession: 'Designer'
    },
    {
        name: 'Doe',
        age: 35,
        profession: 'Manager'
    },
    {
        name: 'Smith',
        age: 28,
        profession: 'Developer'
    },
    {
        name: 'Emily',
        age: 32,
        profession: 'Designer'
    }
]


// const userNames = users.map((user) => user).forEach((user) =>console.log(user));



//! For Each 

// Executes a provided function once for each array element.
// Similar to map, but does not return a new array. Instead, it simply executes the provided function for each element in the array, without modifying the original array or creating a new one.
// Similar to a for loop


// Example 1: Using forEach to log each number in the array

// numbers.forEach((item, index) => {
//     console.log(`Item: ${item}, Index: ${index}`);
// })



//! Filter 

// Creates a new array with all elements that pass the test implemented by the provided function.




// const evenNumbers = numbers.filter((item)=>{
//     return item % 2 === 0;
// })

// console.log(evenNumbers)

// console.log(numbers)

// const oddNumbers = numbers.filter((item) => {
//     return item % 2 !== 0;
// })
// console.log(oddNumbers)


// Example 2: Using filter to get all users with age greater than and equal to 30

// const usersAbove30 = users.filter((user) => user.age >= 30);
// console.log(usersAbove30)


// Example 3: Using filter to get all users with profession 'Developer'

// const developers = users.filter((user) => user.profession === 'Developer');
// console.log(developers)

// Example 4 : Remove one user with name 'John' from the users array

// const usersWithoutJohn = users.filter((user) => user.name !== 'Smith');

// // console.log(usersWithoutJohn);



//! Reduce 

// Executes a reducer function on each element of the array, resulting in a single output value.
// The reducer function takes two arguments: an accumulator and the current value. The accumulator is the accumulated result of the previous iterations, and the current value is the current element being processed in the array. The reduce method applies the reducer function to each element in the array, resulting in a single output value that is returned at the end of the iteration.

// Example 1: Using reduce to sum all numbers in the array


// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);  

// console.log(sum)



const cart = [
    { name: 'Laptop', price: 1000, quantity: 3 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Keyboard', price: 75, quantity: 3 },
    { name: 'Monitor', price: 200, quantity: 2 },
    { name: 'Headphones', price: 150, quantity: 1 }
];

const cart1 = [
    { name: 'Laptop', price: 1000, quantity: 3 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Keyboard', price: 75, quantity: 5 },
    { name: 'Monitor', price: 200, quantity: 1 },
    { name: 'Headphones', price: 150, quantity: 6 },
    { name: 'Webcam', price: 80, quantity: 4 }
];

const cart2 = [
    { name: 'Laptop', price: 1000, quantity: 3 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Keyboard', price: 75, quantity: 5 },
    { name: 'Monitor', price: 200, quantity: 1 },
    { name: 'Headphones', price: 150, quantity: 6 },
    { name: 'Webcam', price: 80, quantity: 4 },
    { name: 'Printer', price: 300, quantity: 2 },
    { name: 'Scanner', price: 250, quantity: 1 }
];



function calculateCartTotals(cart) {
    const cartTotals = cart.map((item) => item.price * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return cartTotals;
}

console.log(calculateCartTotals(cart))
console.log(calculateCartTotals(cart1))
console.log(calculateCartTotals(cart2))