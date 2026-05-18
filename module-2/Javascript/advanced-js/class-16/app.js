// AREA  ---> Math.PI * radius * radius
// CIRCUMFERENCE ----> 2 * Math.PI * radius
// DIAIMETER ----> 2 * radius

// DRY ---> Don't Repeat Yourself

const radius = [1, 3, 4, 8, 10];

// function calculateArea(rad){
//     let output = [];

//     for(let i = 0; i < rad.length; i++){
//         output.push(Math.PI * rad[i] * rad[i]);
//     }

//     return output;
// }

// function calculateCircumference(rad){
//     let output = [];

//     for(let i = 0; i < rad.length; i++){
//         output.push(2 * Math.PI * rad[i]);
//     }

//     return output;
// }

// function calculateDiameter(rad){
//     let output = [];

//     for(let i = 0; i < rad.length; i++){
//         output.push(2 * rad[i]);
//     }   

//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));




// function area(rad){
//     return Math.PI * rad * rad;
// }

// function circumference(rad){
//     return 2 * Math.PI * rad
// }
// function diameter(rad){
//     return 2 * rad
// }

// function calculate(rad, logic){
//     let output = [];

//     for(let i = 0; i < rad.length; i++){
//         output.push(logic(rad[i]));
//     }

//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


// console.log("===========================================")


// MAP 

// const areaResult = radius.map(area)
// const circumferenceResult = radius.map(circumference)
// const diameterResult = radius.map(diameter)

// console.log(areaResult)
// console.log(circumferenceResult)
// console.log(diameterResult)


//! MAP 

// Perform iteration on each element
// Return a new array 
// Can't modified the orignal array 


// let numbers = [1, 2, 3, 4, 5]

// let doubledNumbers = numbers.map((item, index)=>{
//     console.log(index , item)
// })

// console.log(doubledNumbers)

// console.log(numbers)


// let fruits = ["Apple", "Banana", "Mango"]

// fruits.map((item, index)=>{
//     console.log(index, item)
// })


//! For Each 

// Perform iteration on each element
// Return a undefined 
// Can't modified the orignal array 



// FOR EACH > FOR LOOP


// let fruits = ["Apple", "Banana", "Mango"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(i)
//     console.log(fruits[i])
// }

// console.log("--------------------")


// fruits.forEach((item, index)=>{
//     console.log(index)
//     console.log(item)
// })

// console.log(a)


const pricesInUSD = [10, 25, 40, 100];

const pricesInPKR = pricesInUSD.map((price) => {
    return price * 280;
});
console.log(pricesInPKR)