// Unstructured Data 

function greeting() {
    return "Hello world"
}


var personsArray = [
    1, "Ali", 24, "Developer", greeting,

    2, "Waqar", 34, "Designer",
    3, "Sami", 31, "Video Animator"
]

// console.log(personsArray[4]())

// Structured Data 

var persons = [
    {
    id: 1,
    profession: "Developer",
    age: 24,
    name: "Ali",

    greet() {
        return "Hello " + this.name
    }
},

{
    id: 2,
    profession: "Developer",
    age: 34,
    name: "Waqar",

    greet() {
        return "Hello " + this.name
    }
},
{
    id: 3,
    profession: "Designer",
    age: 34,
    name: "Sami",

    greet() {
        return "Hello " + this.name
    }
},
{
    id: 4,
    profession: "HR",
    age: 34,
    name: "Abdullah",

    greet() {
        return "Hello " + this.name
    }
},
{
    id: 5,
    profession: "Chemical Engineer",
    age: 34,
    name: "Engr. Hanzala Ahmed",

    greet() {
        return "Hello " + this.name
    }
},
]



function Persons(id, name, age ,profession){
    this.id = id;
    this.name = name;
    this.age = age;
    this.profession = profession
 
}

var p1 = new Persons(6, "Umair", 24, "Developer")
console.log(p1)

var p2 = new Persons(7, "Comeback", 20, "Student")
console.log(p2)

persons.push(p1)
persons.push(p2)



// for(var i = 0; i < persons.length; i++){
//     console.log(i + 1  + " : " + persons[i].name)
// }

for(var obj of persons){
    console.log(obj.name)
}

// console.log(persons[0].greet())
// console.log(persons[1].greet())
// console.log(persons[2].greet())



// console.log(persons['name'])
// console.log(persons.greet())
// console.log(person1.greet())
