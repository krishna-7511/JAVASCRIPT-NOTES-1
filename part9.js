// document.all[8].innerText = 'IronMan';
// Acess the document or tags by class & Id
document.getElementById('mainImg');
document.getElementsByClassName('oldImg');
document.getElementsByTagName('p');

// getAttribute & setAttribute
let element = document.getElementById("myElement");

// Get an attribute value
let value = element.getAttribute("class");

// Set or update an attribute value
element.setAttribute("class", "new-class");

// Remove an attribute
element.removeAttribute("class");

let img = document.getElementById("myImage");

// Change the src of an image
img.src = "new-image.jpg";

// Change the title attribute
img.title = "New Title";


3. Using dataset for Custom Attributes

let div = document.getElementById("myDiv");

// Set a custom data attribute
div.dataset.info = "Some information";

// Get a custom data attribute
console.log(div.dataset.info);
4. Checking if an Attribute Exists

if (element.hasAttribute("disabled")) {
    console.log("Element is disabled");
}

// Manipulating Style
let heading = document.querySelector('h1');
// heading.style.color = 'purple';

let links = document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color = 'purple'
// }
for(let i=0;i<links.length;i++){
    links[i].style.color = "purple";
}

heading.classList.add("green");
heading.classList.remove("green");
heading.classList.contains;
heading.classList.toggle('green');

// Navigation
let ul = document.querySelector('ul');
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[1].previousElementSibling);

let img = document.querySelector('img');
img.previousElementSibling;
img.previousElementSibling.style;
img.previousElementSibling.style.color = 'green';

// Adding Element
let p = document.createElement('p');
p.innerHTML = "Hi I am a new p";

let body = document.querySelector('body');
body.appendChild(p);
// .append();
// .prepend();
// .insertAdjacent(where,element);

// Removing Elements
body.removeChild(p);
// body.remove();


// Practice Ques
// Ques 1
let para = document.createElement('p');
para.innerText = "Hey, I am Red!";
document.querySelector('body').append(para);
para.classList.add('red');

// Ques 2
let h3 = document.createElement('h3');
h3.innerText = "I'm blue h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

// Ques 3
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para1 = document.createElement('p');

h1.innerText = "I'm in a div";
para1.innerText = "ME TOO!";
div.append(h1);
div.append(para1);

div.classList.add("box1");

document.querySelector('body').append(div);

// Assignment 
// Ques 1
let input = document.createElement('input');
let button = document.createElement('button');

button.innerText = 'Click me';
document.querySelector('body').append(input);
document.querySelector('body').append(button);
// Ans-2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// -----------------------------------------------

// Ans-3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// -----------------------------------------------

// Ans-4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

// -----------------------------------------------

// Ans-5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);