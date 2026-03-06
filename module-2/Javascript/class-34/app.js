// var person = {
//     name: "Areesh",
//     age: 24,
//     role: "Developer",

//     // greet(name){
//     //     return `Hello ${name} !`
//     // }

//     greet(){
//     return `Hello ${this.name} !`
//     }
// }

// console.log(person.greet());



// var admissions = [
//     {
//         name: "Areesh",
//         age: 24,
//         role: "Developer",
//         cnic: "1234567890",
//     },
//     {
//         name: "Ali",
//         age: 22,
//         role: "Designer",
//         cnic: "0987654321",
//     },
//     {
//         name: "Sara",
//         age: 26,
//         role: "Manager",
//         cnic: "1122334455",
//     },
//     {
//         name: "Zain",
//         age: 28,
//         role: "Tester",
//         cnic: "5566778899",
//     }
// ]


var admissions = [];


//! 1: Create {} Object 
//! 2: Enable this   
//! 3: Set this value to this object
//! 4 : Return this object

// function Admissions(name, age, role, cnic) {

//     // this = {}

//     this.name = name;

//     // this = {
//     //     name: "Areesh",
//     // }
//     this.age = age;

//     // this = {
//     //     name: "Areesh",
//     //     age: 24,

//     // }

//     this.role = role;

//     // this = {
//     //     name: "Areesh",
//     //     age: 24,
//     //     role: "Developer",

//     // }

//     this.cnic = cnic;

//       // this = {
//     //     name: "Areesh",
//     //     age: 24,
//     //     role: "Developer",
//     //     cnic: "1234567890",

//     // }
// }

 
// Blueprint for creating multiple objects with similar properties 

function Admissions(name, age, role, cnic) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.cnic = cnic;
}




var admission1 = new Admissions("Areesh", 24, "Developer", "1234567890");
var admission2 = new Admissions("Ali", 22, "Designer", "0987654321");
var admission3 = new Admissions("Sara", 26, "Manager", "1122334455");
// var admission4 = new Admissions("Zain", 28, "Tester", "5566778899");

// admissions.push(admission1);
// admissions.push(admission2);
// admissions.push(admission3);
// admissions.push(admission4);

console.log(admission1);
console.log(admission2);
console.log(admission3);





// console.log(admissions);


for (var i = 0; i < admissions.length; i++) {
    console.log(`Name: ${admissions[i].name}, Age: ${admissions[i].age}, Role: ${admissions[i].role}, CNIC: ${admissions[i].cnic}`);
}