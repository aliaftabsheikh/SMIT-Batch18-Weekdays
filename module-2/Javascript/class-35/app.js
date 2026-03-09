var admissions = [
    {
        name: 'John Doe',
        age: 30,
        city: 'New York'
    },
    {
        name: 'Jane Smith',
        age: 25,
        city: 'Los Angeles'
    },
    {
        name: 'Bob Johnson',
        age: 35,
        city: 'Chicago'
    },
    {
        name: 'Alice Williams',
        age: 28,
        city: 'Houston'
    },
    {
        name: 'Michael Brown',
        age: 32,
        city: 'Phoenix'
    },

    /////// 5000 Objects
]

// function Person (name , age , city) {

// }

// var p1 = new Person("Ali", 30, "New York")

// OOP 4 pillars

// 1- Encapsulation
// 2- Inheritance
// 3- Polymorphism
// 4- Abstraction

// class Person {

//     constructor(name, age, city) {
//         this.name = name
//         this.age = age
//         this.city = city
//     }

//     greeting() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`)
//     }

// }


// var p1 = new Person("Ali", 30, "New York")

// // console.log(p1)
// p1.greeting()




// function PersonOne(name, age, city) {

//     // this = {} // Object Creation

//     this.name = name;
//     this.age = age;
//     this.city = city;

//     // this = {
//     //     name: "Ali",
//     //     age: 30,
//     //     city: "New York"
//     // }

//     // return this 

  
//     this.greeting = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`)
//     }
// }

// var p1 = new PersonOne("Ali", 30, "New York")
// console.log(p1)
// p1.greeting()




var persons = {
    name: "Ali",
    age: 30,
    city: "New York",
    cnic: "12345-6789012-3"
}

// console.log(persons['city'])
// console.log(persons.city)


// For in loop always return object keys in string format

// for (var key in persons){
//     console.log(key + ": " + persons[key])
// }

// For of loop always return object values

// console.log(Object.values(persons))

// for(var value of Object.values(persons)){
//     console.log(value)
// }

var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

for (var fruit of fruits) {
    console.log(fruit)
}