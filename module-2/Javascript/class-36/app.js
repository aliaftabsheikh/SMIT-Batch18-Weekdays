var persons = [
    {
    name: "John",
    age: 30,
    city: "New York",


    greet(){
        console.log("Hello, my name is " + this.name);
    }
},
{
    name: "Jane",
    age: 25,
    city: "Los Angeles",

    greet(){
        console.log("Hello, my name is " + this.name);
    }
},

{
    name: "Bob",
    age: 35,
    city: "Chicago",

    greet(){
        console.log("Hello, my name is " + this.name);
    }
},
{
    name: "Alice",
    age: 28,
    city: "San Francisco",

    greet(){
        console.log("Hello, my name is " + this.name);
    }
}
]


//! New Keyword     

// 1: Create a empty object
// 2: Enable this
// 3: Set the value of this to the new object
// 4 : Return the new object

function Person(name, age , city){
    this.name = name;
    this.age = age;
    this.city = city;
}

function displayPersons(){

    var container = document.getElementById("container");


    for (var i = 0; i < persons.length; i++) {
        var personDiv = document.createElement("div");
        personDiv.setAttribute("class", "user-card");

        var nameElement = document.createElement("h3");
        var ageElement = document.createElement("p");
        var cityElement = document.createElement("p");

        nameElement.textContent = persons[i].name;
        ageElement.textContent = "Age: " + persons[i].age;
        cityElement.textContent = "City: " + persons[i].city;

        personDiv.appendChild(nameElement);
        personDiv.appendChild(ageElement);
        personDiv.appendChild(cityElement);

        container.appendChild(personDiv);

    }
}

function addUser(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    var newPerson = new Person(name, age, city);
    persons.push(newPerson);

    console.log(`My name is ${newPerson.name}, I am ${newPerson.age} years old and I live in ${newPerson.city}.`);

    displayPersons()

}


displayPersons()

// var person = new Person("Tom", 40, "Miami");
// var person1= new Person("Jerry", 35, "Boston");

// persons.push(person);
// persons.push(person1);

// for (var i = 0; i < persons.length; i++) {
//     console.log(`My name is ${persons[i].name}, I am ${persons[i].age} years old and I live in ${persons[i].city}.`);
// }




// Give three fields user name, age and city 
// Give a data from prompt / Input
// Store the data in an array of objects
// Display the data into the browser in a readable format. (Use for loop)
// Use DOM manipulation to display the data in the browser. (Use for loop)  