// console.log("Hello World !");

// createElement
// hasAttribute
// setAttribute
// getAttribute
// removeAttribute
// appendChild
// removeChild
//.attributes
//.childNodes
//.parentNode
//.nextElementSibling
//.previousElementSibling
//.innerHTML
//.textContent
//.innerText
//.style
//.classList
//.className
//.id
//.value

var todoConatiner = document.getElementById("todo-container");

function deleteTodo(e){
    var todoItem = e.parentNode;
    todoConatiner.removeChild(todoItem);
}


function editTodo(e){
    var todoItem = e.parentNode;
    var todoTextEle = todoItem.querySelector(".todo-text");

     var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;


    if(todoText === ""){
        alert("Please enter some text to edit the todo.");
        return;
    }

    todoTextEle.innerText = todoText;
    todoInput.value = "";



}


function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    var newTodo = document.createElement("div");
    newTodo.setAttribute("class", "todo-item");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.innerText = todoText;

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "del-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");



    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("onclick", "editTodo(this)");

    newTodo.appendChild(todoTextEle);
    newTodo.appendChild(editBtn);
    newTodo.appendChild(deleteBtn);

    todoConatiner.appendChild(newTodo);

    todoInput.value = "";


}