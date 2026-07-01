// class Person{
//     constructor(name , age, profession) {
//         this.name = name;
//         this.age = age;
//         this.profession = profession;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.profession}.`);
//     }
// }

// const person1 = new Person("John Doe", 30, "Engineer");
// // person1.greet();

// const person2 = new Person("Jane Smith", 25, "Designer");
// // person2.greet();






// class Employee extends Person {
//     constructor(name, age, profession, salary, employeeId) {
//         super(name, age, profession);
//         this.salary = salary;
//         this.employeeId = employeeId;   
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, I work as a ${this.profession}, and my employee ID is ${this.employeeId}.`);
//     }
// }


// const employee1 = new Employee("Alice Johnson", 28, "Software Developer", 50000, "EMP001");
// console.log(employee1); 


// employee1.greet();



// ENCAPSULATION


// ACCESS MODIFIERS

// - public
// - private
// - protected

// class BankAccount {
//     #balance = 0; // Private property
//     constructor(accountNumber, accountHolder, balance) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.#balance = balance;
//     }

//     set balance(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//         console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
//     }

 

//     get balance() {
//         return this.#balance;
//     }

// }

// const b1 = new BankAccount("123456789", "John Doe", 1000);

// b1.balance = 500;

// console.log(`Current balance: ${b1.balance}`);

// console.log(b1); 









// ============================  JAVASCRIPT END ================================