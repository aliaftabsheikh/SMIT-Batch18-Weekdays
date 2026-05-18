// HIGHER ORDER Functions

// Area   (Math.PI * radius * radius)
// circumference (2 * Math.PI * radius)
// diameter (2 * radius)


// DRY - Don't Repeat Yourself


const radius = [1, 3, 5, 7];

function calculateArea(rad){
    let output = [];

    for(let i = 0; i < rad.length; i++){
        output.push(Math.PI * rad[i] * rad[i]);
    }
    return output;
}

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



function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius;
}

function diameter(radius){
    return 2 * radius;
}



function calculate(rad, logic){
    let output = [];
    for(let i = 0; i < rad.length; i++){
        output.push(logic(rad[i]));
    }
    return output;
}




console.log(calculate(radius, area)); 
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


console.log('================================');

// MAP



const areaRadius = radius.map(area)
const circumferenceRadius = radius.map(circumference)
const diameterRadius = radius.map(diameter)

console.log(areaRadius);
console.log(circumferenceRadius);
console.log(diameterRadius);

// MAP , FOR EACH  , REDUCE