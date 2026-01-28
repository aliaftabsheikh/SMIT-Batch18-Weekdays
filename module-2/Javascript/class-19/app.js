// alert("Hello World ")

// function greet() {
//     var name = prompt("Enter your name:");
//     alert("Hello " + name);
// }
// greet("Alice");


function onFocusStyles(e) {


    e.style.backgroundColor = "lightyellow";
    e.style.border = "2px solid orange";
    e.style.boxShadow = "0 0 5px orange";
    e.style.transition = "0.3s";
    e.style.color = "black";
    e.style.fontWeight = "bold";
    e.style.fontSize = "16px";
    e.style.padding = "5px";
    e.style.placeholder = "Type here...";
    e.style.outline = "none";
    e.style.letterSpacing = "1px";   
    e.style.borderRadius = "4px";
}


function onBlurStyles(e) {
    
    e.style.backgroundColor = "white";
    e.style.border = "1px solid gray";
    e.style.boxShadow = "none";
    e.style.transition = "0.3s";
    e.style.color = "gray";
    e.style.fontWeight = "normal";
    e.style.fontSize = "14px";
    e.style.padding = "3px";
    e.style.outline = "none";
    e.style.letterSpacing = "normal";
    e.style.borderRadius = "2px";
    
}