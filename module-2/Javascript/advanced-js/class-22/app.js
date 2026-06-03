const todoAPI = "https://jsonplaceholder.typicode.com/todos";

// function getTodos(API) {
//     const todos = fetch(API)

//     return todos.then((response) => {
//         return response.json();
//     })
// }

// const todos = getTodos(todoAPI);

// todos.then((data) => {
//     console.log(data);
// })




// HOW TO CREATE YOUR OWN PROMISE

async function getTodos(API){
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

getTodos(todoAPI).then((data) => {
    console.log(data);
})