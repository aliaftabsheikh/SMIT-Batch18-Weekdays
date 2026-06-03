const todoApi1 = "https://jsonplaceholder.typicode.com/todos/1";
const todoApi2 = "https://jsonplaceholder.typicode.com/todos/2";
const todoApi3 = "https://jsonplaceholder.typicode.com/todos/3";


// todos.then((response)=>{
//     if(response.ok){
//         console.log("Response is ok");
//         return response.json();
//     }
// }).then((data)=>{
//     console.log(data);
// })

// function getTodos(API) {
//     const todos = fetch(API)

//     return todos.then((response) => {
//         if (response.ok) {
//             return response.json();
//         }
//     })

// }


// const todoData1 = getTodos(todoApi1);
// const todoData2 = getTodos(todoApi2);
// const todoData3 = getTodos(todoApi3);

// todoData1.then((data) => {
//     console.log(data);
// });
// todoData2.then((data) => {
//     console.log(data);
// });
// todoData3.then((data) => {
//     console.log(data);
// }); 


async function getTodos() {
    const response = await fetch(todoApi1);
    if (response.ok) {
        const data = await response.json();
        return data;
    }

}

const todoData = getTodos();

todoData.then(data => {
    console.log(data);
});