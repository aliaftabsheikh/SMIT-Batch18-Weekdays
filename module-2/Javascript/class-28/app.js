var todoContainer = document.getElementById("todo-container");

function deleteTodo(button) {
    var id = button.parentNode.id;
    var todoItem = document.getElementById(id);
    todoContainer.removeChild(todoItem);
}

function editTodo(button) {
    var id = button.parentNode.id;
    var todoItem = document.getElementById(id);

    var todoText = todoItem.querySelector(".todo-text");

    var todoInput = document.getElementById("todo-input");

    if (todoInput.value === "") {
        alert("Please enter a new todo item before editing.");
        return;
    }

    var todoInputText = todoInput.value;


    todoText.innerText = todoInputText;


    todoInput.value = "";




}




function addTodo(){
var todoInput = document.getElementById("todo-input");
var todoInputText = todoInput.value;

if (todoInputText === "") {
    alert("Please enter a todo item.");
    return;
}

var todoItem = document.createElement("div");
todoItem.setAttribute("class", "todo-item");
todoItem.setAttribute("id", "todo-item-" + Date.now());

var todoText = document.createElement("p")
todoText.setAttribute("class", "todo-text");
todoText.innerText = todoInputText;

var deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.setAttribute("class", "del-btn");
deleteButton.setAttribute("onclick", "deleteTodo(this)");

var editButton = document.createElement("button");
editButton.innerText = "Edit";
editButton.setAttribute("class", "edit-btn");
editButton.setAttribute("onclick", "editTodo(this)");


todoItem.appendChild(todoText);
todoItem.appendChild(editButton);
todoItem.appendChild(deleteButton);
todoContainer.appendChild(todoItem);

todoInput.value = "";

}