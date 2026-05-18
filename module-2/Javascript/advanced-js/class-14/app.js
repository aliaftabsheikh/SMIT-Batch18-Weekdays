
// setTimeout(() => {
//     console.log('Hello, World from setTimeout after three seconds!');
// }, 3000);

// setTimeout(() => {
//     console.log('Hello, World from setTimeout after two seconds!');
// }, 2000);

// setTimeout(() => {
//     console.log('Hello, World from setTimeout after one second!');
// }, 1000);








// x()
// y()

// function x(){
//     console.log('Hello, World from function x!');
// }

// function y(){
//     console.log('Hello, World from function y!');
// }


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log('Hello, World from button click!');
});


function infiniteLoop() {
   for (let i = 0; i < 1000000; i++) {
       console.log('Hello, World from infinite loop!', i);
   }
}

infiniteLoop();



// Next class task :

// Higher Order functions 
    // Map
    // forEach
    // Reduce 