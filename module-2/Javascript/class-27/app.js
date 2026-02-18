// hasAttribute
// getAttribute
// setAttribute

// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("style");

var target = document.getElementsByTagName("p");

// var getAttr = target.getAttribute("class");

// console.log(getAttr);

// var setClass = target.setAttribute("class", "para-1");

// console.log(target[0].nodeName);
// console.log(target[1].nodeName);



// var todoContainer = document.getElementById("todo_container");

// console.log(todoContainer);

//! GOOD APPROACH TO CREATE ELEMENTS IN DOM

// var newTodo = document.createElement("h1");

// newTodo.setAttribute("class", "heading");

// newTodo.textContent = 'Hello World from JS !'

// todoContainer.appendChild(newTodo);

//! BAD APPROACH TO CREATE ELEMENTS IN DOM

// var newTodo = `<div>
// <p class"todo-item"Todo 1</p>

// <button class="delete-btn">Delete</button>
// <button class="edit-btn">Edit</button>
// </div>`

// todoContainer.innerHTML = newTodo;


// var para1 = document.getElementById("p1");

// var para1 = document.createElement("p");

// para1.textContent = "Hello World from JS !";

// var target = todoContainer.childNodes[1]

// // todoContainer.insertBefore(para1, target);

// // todoContainer.removeChild(target);



// console.log(todoContainer.childNodes);



var todoContainer = document.getElementById("todo_container");



function addTodo() {
    var todoInput = document.getElementById("todo_input");

    var newTodo = document.createElement("div");

    newTodo.setAttribute("class", "todo-item");

    var todoText = document.createElement("p");

    todoText.innerText = todoInput.value;

    newTodo.appendChild(todoText);
    todoContainer.appendChild(newTodo);

    todoInput.value = "";


}
