// ASYNC / AWAIT 

const todoAPI = "https://jsonplaceholder.typicode.com/todos/1";

// function getTodo(API) {
//     const todo = fetch(todoAPI)

//     return todo.then((response)=> {
//         return response.json();
//     })
// }


// getTodo(todoAPI).then((data) => {
//     console.log(data);
// })

// async function getTodo(API) {
//     const response = await fetch(API);
//     const data =  await response.json();
    
//     return data;
// }

// getTodo(todoAPI).then((data) => {
//     console.log(data);
// });


// async function greet(){
//     return "Hello World";
// }

// console.log(greet()); 


const p1 = new Promise((resolve, reject)=>{
    if(true){
       setTimeout(() => {
        resolve("Promise resolved from p1");
       }, 4000);
    } else {
        reject("Promise rejected");
    }
})
 
const p2 = new Promise((resolve, reject)=>{
    if(true){
       setTimeout(() => {
        resolve("Promise resolved from p2");
       }, 2000);
    } else {
        reject("Promise rejected");
    }
})


async function handlePromise(){
    try {
        // console.log("Hello World");
        const result = await p1;
        console.log("Success:", result);

        const result2 = await p2;
        console.log("Success:", result2);
    } catch (error) {
        console.log("Error:", error);
    }
}

handlePromise();

// console.log("Outside of async function");