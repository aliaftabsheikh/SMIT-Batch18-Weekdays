class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    greet(){
        return `Hello, my name is ${this.name}, I am a ${this.profession} and I am ${this.age} years old.`;
    }
}

// Default constructor :     constructor() {}

class Employee extends Person {
    constructor(name, age, profession, salary, employeeId) {
        super(name, age, profession);
        this.salary = salary;
        this.employeeId = employeeId;
    }
}

const employee = new Employee("John Doe", 30, "Software Engineer", 80000, "E12345");

console.log(employee);

// const professions = [
//     "Data Scientist",
//     "Project Manager",
//     "UX Designer",
//     "Software Engineer",
//     "QA Engineer"
// ];

// const persons = [];

// for (let i = 1; i <= 20;i++) {
//     const person = new Person(`Person-${i}`, 20 + i, professions[(i - 1) % professions.length]);
//     persons.push(person);
//     console.log(person);

//     console.log(person.greet());

//     console.log('-----------------------------');
// }


// POLYMORPHISM
// ENCAPSULATION
// ABSTRACTION

// Next class LLM Topic 