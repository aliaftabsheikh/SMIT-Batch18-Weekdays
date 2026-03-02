// function greet(){
//     console.log("Hi !!!")
// }


// var btn = document.getElementById("btn");

// btn.addEventListener("click", greet)


// var heading = document.querySelector("h1");



// heading.addEventListener("mouseover", function (){
//     heading.style.color = "white";
//     heading.style.fontSize = "50px";
//     heading.style.fontFamily = "cursive";
//     heading.style.textShadow = "2px 2px 5px blue";
//     heading.style.transition = "all 0.5s ease"; 
//     heading.style.cursor = "pointer";
//     heading.style.transform = "rotate(4deg)";
//     heading.style.backgroundColor = "black";
// } )

// heading.addEventListener("mouseout", function(){
//     heading.style.color = "black";
//     heading.style.fontSize = "40px";
//     heading.style.fontFamily = "Arial, sans-serif";
//     heading.style.textShadow = "none";
//     heading.style.transition = "all 0.5s ease";
//     heading.style.transform = "rotate(0deg)";
//     heading.style.backgroundColor = "transparent";
// })



//! Unstructured Data:

// var person = ["Ali", 24, "Developer", "Pakistan", "Waqar", 23, "Designer", "India", "Sara", 22, "Manager", "USA"];

// for(var i = 0; i < person.length; i++){
//     console.log(`My name is ${person[i]} and my age is ${person[i]}`)
// }

//! Structured Data:

// var person = {
//     name: "Ali",
//     age : 24,
//     role: "Developer",
//     country: "Pakistan"
// }

// console.log(person.role)



var persons = [
    {
        name: "Ali",
        age: 24,
        role: "Developer",
        country: "Pakistan",
        isGraduated: true
    },

    {
        name: "Waqar",
        age: 23,
        role: "Designer",
        country: "India",
        isGraduated: false
    },

    {
        name: "Sara",
        age: 22,
        role: "Manager",
        country: "USA",
        isGraduated: true
    },
    {
        name: "John",
        age: 25,
        role: "Tester",
        country: "UK",
        isGraduated: false
    },
    {
        name: "Emily",
        age: 21,
        role: "Analyst",
        country: "Canada",
        isGraduated: true
    },

]

// console.log(persons[1].name)

for(var i = 0; i < persons.length; i++){
    console.log(`My name is ${persons[i].name} and my age is ${persons[i].age} and I am a ${persons[i].role} from ${persons[i].country}`)
}