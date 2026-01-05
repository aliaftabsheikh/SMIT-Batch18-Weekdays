var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Hyderabad"];

// var citiesLength = cities.length;

// console.log("CitiesLength:", citiesLength);


// console.log("City :", cities[citiesLength - 1]);

// for(var i = 0; i < cities.length; i++){
//     console.log("City : ", cities[i]);
// }

// cities[7] = "Faisalabad";

// cities[1] = "Multan";

//! SHIFT

// var removedCity = cities.shift();
// console.log("Removed City:", removedCity);


//! PUSH

// cities.push("Faisalabad", "Multan");

//! POP

// var removedCity = cities.pop();
// console.log("Removed City:", removedCity);

//! UNSHIFT

// cities.unshift("Sialkot", "Gujranwala");

//! SPLICE

cities.splice(2, 0, "Sargodha");
cities.splice(0, 0, "Bahawalpur");

console.log(cities);


// console.log(cities[6]);