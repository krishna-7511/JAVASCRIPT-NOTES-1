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



// newly added from in detail step by step



//part9:DOM MANIPULATION

console.dir(document);
all property
console.dir(document.all);
console.dir(document.all[8].innerText = 'IronMan') ;


let h2s = document.getElementsByTagName("h2");
h2s[0].innerText = "Teeth";
  (or)
console.dir(document.all[10].innerHTML="Seeth");


classname:
let smallImages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    smallImages[i].src="assets/spiderman_img.png";
  console.log(`value of image no. #{i} is changed`)
 }
  

let paragraphs = document.getElementsByTagName("p");

 //Loop through and log each paragraph
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerText="abc");
}


//get and set attributes

let img=document.querySelector("img");

img.getAttribute("id");

img.setAttribute('id','spidermanImg');   // set attributes accepts only single value 

 img.setAttribute('src',"assets/creation_3.jpeg" )


//  classList property

  let heading=document.querySelector('h1');

 heading.classList;

heading.classList.add("red");

heading.classList.remove("green");
heading.classList.contains('green');
heading.classList.toggle('green');

let box=document.querySelector('.box');

box.classList.add("yellowbg");



// navigation on page 

let h4=document.querySelector('h4');

h4.parentElement;

h4.children;

let box=document.querySelector('.box');

box.children;

box.childElementCount;

let ul=document.querySelector('ul');

ul.parentElement;

ul.childElementCount;

ul.children;

ul.children[0];

ul.children[2].previousElementSibling;

let img=document.querySelector("img");

img.previousElementSibling;

img.previousElementSibling.style.color="green";



// Adding Elements on page
let newpara=document.createElement('p');

let newp=document.createElement('p');

console.dir(newp);


newp.innerText="Hi IAm a new p";

let body=document.querySelector('body');

body.appendChild(newp);

let box=document.querySelector('.box');

box.appendChild(newp);

let btn=document.createElement('button');

console.dir(btn);

btn.innerText="Click me!";

box.appendChild(btn);


newp.append("this is new text");


newp.append(btn);

newp.append("do not click this button");


box.prepend(newp);

let btn=document.createElement('button');

btn.innerHTML="NEW BUTON!!";

let p =document.querySelector('p');

p.insertAdjacentElement('beforebegin', btn);

p.insertAdjacentElement('afterbegin', btn);

p.insertAdjacentElement('beforeend', btn);

p.insertAdjacentElement('afterend', btn);


//removing Eleemnets

let body=document.querySelector('body');

body.removeChild(btn);

p.insertAdjacentElement('afterend', btn);

btn.remove();

p.remove();   // to remove paragraph

body.remove();  // to remove body


/*complete DOM
  
The DOM (Document Object Model) methods are used in JavaScript to interact with and manipulate the HTML structure of a webpage. These methods help in selecting, modifying, adding, and removing elements from the HTML document.

📘 What is the DOM?
The DOM is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects (nodes). Using DOM methods, JavaScript can access and change the content, structure, and style of a web page.

✅ Common DOM Methods (With Simple Examples)
Here is a detailed list of the most commonly used DOM methods:

1. getElementById()
Description:
Selects a single element by its id.


<p id="demo">Hello</p>
<script>
  const element = document.getElementById("demo");
  element.style.color = "blue";
</script>

2. getElementsByClassName()
Description:
Returns a collection of elements with a specified class name.


<p class="greeting">Hi</p>
<p class="greeting">Hello</p>
<script>
  const elements = document.getElementsByClassName("greeting");
  elements[0].style.color = "red"; // First <p>
  elements[1].style.color = "green"; // Second <p>
</script>

3. getElementsByTagName()
Description:
Returns a collection of all elements with a specified tag name.

<p>First</p>
<p>Second</p>
<script>
  const paragraphs = document.getElementsByTagName("p");
  paragraphs[0].style.fontWeight = "bold";
</script>

4. querySelector()
Description:
Returns the first element that matches a CSS selector.


<div class="box">Box 1</div>
<div class="box">Box 2</div>
<script>
  const box = document.querySelector(".box"); // Only the first one
  box.style.backgroundColor = "yellow";
</script>

5. querySelectorAll()
Description:
Returns all elements that match a CSS selector (as a NodeList).

<div class="item">Item 1</div>
<div class="item">Item 2</div>
<script>
  const items = document.querySelectorAll(".item");
  items.forEach(item => item.style.border = "1px solid black");
</script>


6. createElement()
Description:
Creates a new HTML element.

<div id="container"></div>
<script>
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph!";
  document.getElementById("container").appendChild(newPara);
</script>


7. appendChild()
Description:
Adds a node as the last child of a parent node.

<ul id="myList"></ul>
<script>
  const li = document.createElement("li");
  li.textContent = "List Item";
  document.getElementById("myList").appendChild(li);
</script>


8. removeChild()
Description:
Removes a child node from a parent node.

<ul id="myList">
  <li id="item">Delete me</li>
</ul>
<script>
  const list = document.getElementById("myList");
  const item = document.getElementById("item");
  list.removeChild(item);
</script>


9. replaceChild()
Description:
Replaces a child node with another node.

<ul id="myList">
  <li id="oldItem">Old Item</li>
</ul>
<script>
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  const list = document.getElementById("myList");
  const oldItem = document.getElementById("oldItem");
  list.replaceChild(newItem, oldItem);
</script>

10. innerHTML
Description:
Gets or sets the HTML content inside an element.

<div id="box">Old Content</div>
<script>
  document.getElementById("box").innerHTML = "<strong>New Content</strong>";
</script>


11. textContent
Description:
Gets or sets the text content (without HTML tags).

<div id="textBox"><b>Hello</b></div>
<script>
  document.getElementById("textBox").textContent = "Just Text";
</script>

12. setAttribute()
Description:
Sets the value of an attribute on the specified element.

<img id="myImg" />
<script>
  const img = document.getElementById("myImg");
  img.setAttribute("src", "image.jpg");
  img.setAttribute("alt", "Image");
</script>


13. getAttribute()
Description:
Gets the value of an attribute.

<a id="myLink" href="https://example.com">Visit</a>
<script>
  const link = document.getElementById("myLink");
  console.log(link.getAttribute("href")); // Outputs: https://example.com
</script>


14. removeAttribute()
Description:
Removes a specified attribute from an element.


<input id="myInput" type="text" value="hello" />
<script>
  document.getElementById("myInput").removeAttribute("value");
</script>


15. classList Methods
add(): Adds a class

remove(): Removes a class

toggle(): Toggles a class on/off

contains(): Checks if a class exists


<div id="box" class="red"></div>
<script>
  const box = document.getElementById("box");
  box.classList.add("blue");
  box.classList.remove("red");
  box.classList.toggle("hidden");
  console.log(box.classList.contains("blue")); // true
</script>

🔚 Summary Table

Method	                            Description

getElementById()	                Select by ID
getElementsByClassName()	        Select by class (HTMLCollection)
getElementsByTagName()	            Select by tag (HTMLCollection)
querySelector()	                    Select first match
querySelectorAll()	                Select all matches (NodeList)
createElement()	                    Create an element
appendChild()	                    Add element to parent
removeChild()	                    Remove child from parent
replaceChild()	                    Replace one child with another
innerHTML	                        Get/set HTML
textContent	                        Get/set text only
setAttribute()	                    Set attribute
getAttribute()	                    Get attribute
removeAttribute()	                Remove attribute
classList	                        Manage CSS classes


*/

