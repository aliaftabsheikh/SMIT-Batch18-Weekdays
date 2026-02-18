var todoList = document.getElementById('todo-list');

function addTodo(){
    var todoInput = document.getElementById('input-field');
    var todoText = todoInput.value;

    if(todoText === ""){
        alert("Please enter a todo item.");
        return;
    }

    // var todoItem = document.createElement('div');

    var todo = `<div>
    <p class="todo" id="todo-${Date.now()}">
        ${todoText}
    </p>

    <button onclick="deleteTodo('todo-${Date.now()}')">Delete !</button>
    </div>`;



    todoList.innerHTML += todo;

    todoInput.value = "";



}