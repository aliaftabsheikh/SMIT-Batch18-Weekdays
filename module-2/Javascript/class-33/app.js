// var person = {
//     name : 'Waqar',
//     age : 30,
//     city : 'Karachi',

//     greet: function(){
//         return `Hello ${person.name}`;
//     }
// }
// var person1 = {
//     name : 'Hamza',
//     age : 40,
//     city : 'Lahore',

//     greet: function(){
//         return `Hello ${person1.name}`;
//     }
// }
// var person2 = {
//     name : 'Aneeq',
//     age : 40,
//     city : 'Islamabad',

//     greet: function(){
//         return `Hello ${person2.name}`;
//     }
// }

// console.log(person.greet());
// console.log(person1.greet());
// console.log(person2.greet());




// var persons = [
//     {
//         name: 'Waqar',
//         age: 30,
//         city: 'Karachi',

//         greet(){
//             return `Hello ${this.name} from ${this.city}`;
//         }
//     },


//     {
//         name: 'Hamza',
//         age: 40,
//         city: 'Lahore',
//         greet(){
//             return `Hello ${this.name} from ${this.city}`;
//         }
//     },

//     {
//         name: 'Aneeq',
//         age: 40,
//         city: 'Islamabad',

//         greet(){
//             return `Hello ${this.name} from ${this.city}`;
//         }
//     },
//     {
//         name: 'Sinan',
//         age: 40,
//         city: 'Quetta',

//         greet () {
//             return `Hello ${this.name} from ${this.city}`;
//         }
//     },
//     {
//         name: 'Tanweer',
//         age: 40,
//         city: 'Peshawar',

//         greet () {
//             return `Hello ${this.name} from ${this.city}`;
//         }
//     },
// ]


// for (var i = 0; i < persons.length; i++) {
//     console.log(persons[i].greet());
// }


// var person = {
//     name: 'Waqar',
//     age: 30,
//     city: 'Karachi',

//     hobbies: ['Coding', 'Gaming', 'Cooking'],

//     UniversityTimings: {
//       morning:{
//         start: '8:00 AM',
//         end: '12:00 PM'
//       },
//       evening:{
//         start: '2:00 PM',
//         end: '6:00 PM'
//       }
//     }

// }

// console.log(person.hobbies[0])

// console.log(person.UniversityTimings.morning.start);
// console.log(person.UniversityTimings.morning.end);
// console.log(person.UniversityTimings.evening.start);
// console.log(person.UniversityTimings.evening.end);


// var person = {
//     name: 'Waqar',
//     age: 30,
//     city: 'Karachi',

// }


// person.cnic = '12345-6789012-3';
// person.city = 'Islamabad';

// delete person.age

// console.log(person);



var todos = [
    {
        id: 1,
        title: 'Learn JavaScript',
        completed: false
     }
    
]


todos.push({
    id: 2,
    title: 'Learn React',
    completed: false
})


var todoContainer = document.getElementById('todo-container');




for (var i = 0; i < todos.length; i++) {
  var divContainer = document.createElement('div');
  var pContainer = document.createElement('p');

    pContainer.innerText = todos[i].title;

    divContainer.appendChild(pContainer);

    todoContainer.appendChild(divContainer);


}