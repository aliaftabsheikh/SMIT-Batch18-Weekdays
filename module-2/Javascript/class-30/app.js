var todoConatiner = document.getElementById("todo-container");
var addTodoButton = document.getElementById("add-todo-button");

// addTodoButton.addEventListener('click', addTodo);

addTodoButton.addEventListener('click', addTodo)

document.removeEventListener('click', addTodo);


function deleteTodo(event){
    var todoItem = event.parentNode;
    todoConatiner.removeChild(todoItem);
}


function editTodo(event){
    var todoItem = event.parentNode;

    var todoTextEle = todoItem.querySelector(".todo-text");

     var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    todoTextEle.innerText = todoText;

     todoInput.value = "";

}

function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;


    if(todoText === ""){
        alert("Please enter a task");
        return;
    }


    var newTodo = document.createElement("div");
    newTodo.setAttribute("class", "todo-item");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.innerText = todoText;

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "del-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', function(){
        deleteTodo(this);
    })


    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "Edit";

    editBtn.addEventListener('click', function(){
        editTodo(this);
    })

    newTodo.appendChild(todoTextEle);
    newTodo.appendChild(editBtn);
    newTodo.appendChild(deleteBtn);

    console.log(newTodo);

    todoConatiner.appendChild(newTodo);

    todoInput.value = "";


}