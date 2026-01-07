// var fruits = ["Apple", "Banana", "Cherry", "Date", "Blueberry"];

// for(var i = 0; i < fruits.length; i++) {
//     if(fruits[i] === "Banana") {
//         console.log(fruits[i] + " found");

//         break;

//     }
//     console.log(fruits[i]);
// }


//! Nested Loop


// for(var i = 1; i <= 5; i++) {
//     for(var j = 1; j <= 5; j++) {

//         console.log(i + " " + j);
//     }

//     console.log("----------");
// }

// for(var i = 1; i <= 10; i++) {
//     var stars = "";

//     for(var j = 1; j <= i; j++) {
//         stars = stars + "*";
//     }

//     console.log(stars);
// }



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }


// console.log(fullNames);



// var fullName = "ali";

// fullName = fullName.toLowerCase();

// console.log(fullName);



// var fruits = ["Apple", "Banana", "Cherry", "Date", "Blueberry", "Mango"];

// var extractedFruits = fruits.slice(2);

// console.log(extractedFruits);



// var city = "Karachi";

// console.log(city.slice(0, 3));


//! while loop 

var fruits = ["Apple", "Banana", "Cherry", "Date", "Blueberry", "Mango", "Pineapple", "Strawberry", "Watermelon", "Grapes", "Papaya", "Kiwi", "Orange"];

var i = 0;

// while (true) {

//     if(fruits[i] === "Cherry") {
//         console.log(fruits[i] + " Found !!");

//         break;
//     }
//     console.log(i + 1 + ":  " + fruits[i]);

//      i++;

// }


// Do while loop
do {
    if(fruits[i] === "Kiwi") {
        console.log(i + 1 + " :  " + fruits[i] + " Found !!");
        break;
    }
    console.log(i + 1 + ":  " + fruits[i]);
    i++;
} while (true);