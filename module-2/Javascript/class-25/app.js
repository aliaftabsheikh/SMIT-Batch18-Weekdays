// getElementById() 
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()


//! getElementById() method is used to select an element by its id attribute. It returns a single element.

// var heading = document.getElementById('heading');

// heading.style.backgroundColor = 'blue';


//! getElementsByClassName() method is used to select elements by their class attribute. It returns a collection of elements.


var text = document.getElementsByClassName('text');
console.log(text)

for(let i=0; i<text.length; i++){
    text[i].style.color = 'red';
    text[i].style.fontSize = '30px';
    text[i].style.fontWeight = 'bold';
    text[i].style.textAlign = 'center';
    text[i].style.textTransform = 'uppercase';
    text[i].style.textShadow = '2px 2px 4px #000000';
    text[i].style.textDecoration = 'underline';
    text[i].style.textDecorationColor = 'yellow';
    text[i].style.textDecorationStyle = 'dashed';
    text[i].style.textDecorationThickness = '5px';
}

//! getElementsByTagName() method is used to select elements by their tag name. It returns a collection of elements.

var para = document.getElementsByTagName('p');


for(let i=0; i<para.length; i++){
    para[i].style.backgroundColor = 'lightblue';
    para[i].style.padding = '10px';
    para[i].style.border = '2px solid black';
    para[i].style.borderRadius = '10px';
    para[i].style.margin = '10px';

}

//! querySelector() method is used to select the first element that matches a specified CSS selector. It returns a single element.


// var headingId = document.querySelector('#heading');
// var headingClass = document.querySelector('.text');
// var headingTag = document.querySelector('h1');


// console.log(headingId);
// console.log(headingClass);
// console.log(headingTag);


// ! querySelectorAll() method is used to select all elements that match a specified CSS selector. It returns a collection of elements.


var allText = document.querySelectorAll('.text');



// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].parentNode)

var heading = document.querySelectorAll('div');

console.log(heading[0].nextElementSibling);