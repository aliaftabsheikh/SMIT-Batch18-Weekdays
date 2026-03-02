//! // Unstructured data 

// var persons = ["Ali", "Ahmed"];

// console.log(persons[1]);

//! // Structured data

// var person = {
//     name : "Ali"
// }

// console.log(person.name)


// var persons = [
//     "Ali",
//     24,
//     "Developer",
//     "Pakistan",

//     "Ahmed",
//     25,
//     "Designer",
//     "Afghnistan",

//     "Waqar",
//     27,
//     "Tester",
//     "India"
// ]

// for (var i = 0; i < persons.length; i++) {
//     console.log(`My name is ${persons[i]} and I am ${persons[i]} years old. I am a ${persons[i]} and I belong to ${persons[i]}.`);
// }




// var persons = [
//     {
//         name : "Ali",
//         age : 24,
//         role : "Developer",
//         country: "Pakistan",
//     },
//     {
//         name : "Ahmed",
//         age : 25,
//         role : "Designer",
//         country: "Afghanistan",
//     },
//     {
//         name : "Waqar",
//         age : 27,
//         role : "Tester",
//         country: "India",
//     }
// ]

// // console.log(persons[2].age);

// for (var i = 0; i < persons.length; i++) {
//  console.log(`My name is ${persons[i].name} and I am ${persons[i].age} years old. I am a ${persons[i].role} and I belong to ${persons[i].country}.`);
// }




var persons = {
    name: "Ali",
    age: 24,
    role: "Developer",
    country: "Pakistan",


    greet: function(){
      return 'Hello World !';
    }
}   



// persons.country = "Turkey"
// persons.cnic = "12345-1234567-1";

console.log(persons.greet());

