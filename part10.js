// DOM Event
let btn = document.querySelector('button');
console.dir(btn);
  
//onclick single button
btn.onclick = function(){
    console.log('button was clicked!');
}

//for multiple buttons
let btns = document.querySelectorAll("button"); 

for (let btn of btns) { 
    btn.onclick = () => {
        console.log("Button was clicked");
    };
}


//single button
btn.onmouseenter = function(){
    console.log("Button has been touched!");
}

//This is for 2 or more buttons
for(let btns of btn){
    btns.onmouseenter = function (){
        console.log("touched!!");
    }
}


// Event Listener
function sayHello(){
    alert('Hello');
}

function sayName(){
    alert('apna college');
}

// This is for 2 or more buttons
for(btns of btn){
    btns.addEventListener("click",sayHello);
    btns.addEventListener("click",sayName);
}

// this in EventListener
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = 'blue';
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h2.addEventListener("click",changeColor);


// keyboard events

let btn = document.querySelector("button");

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked");
});


let inp = document.querySelector('input');
inp.addEventListener('keydown', function(event) {
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed");
});

inp.addEventListener('keydown', function(event) {
    console.log("code = ", event.code); // Arrow key used
    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moves backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});

//using for of loop 
let inputs = document.querySelectorAll("input"); // selects all input fields

   for(let inp of inputs){
    inp.addEventListener('keydown', function(event) {
        console.log("code = ", event.code);
        if (event.code == "ArrowUp") {
            console.log("character moves forward");
        } else if (event.code == "ArrowDown") {
            console.log("character moves backward");
        } else if (event.code == "ArrowLeft") {
            console.log("character moves left");
        } else if (event.code == "ArrowRight") {
            console.log("character moves right");
        }
    });
};

// Form Event

let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitteed");
     
    let user = document.querySelector("#user");
    let pass = document.querySelector("#password");
    

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});


let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
     
     let user = this.elements[0];  //form.elements[0];
    let pass = this.elements[1];
    

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});




// More Events

let user = document.querySelector("#user");
user.addEventListener("change",function(event){
    event.preventDefault();
    console.log("change event");
    console.log("Final value = ",user.value);
});

user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input event");
    console.log("Final value = ",user.value);
});




// Assignment 10

// Ques 1
btn.addEventListener("mouseout",function(){
    console.log('mouse out!');
});

user.addEventListener("keypress",function(){
    console.log('Keypressed!');
});

// btn.addEventListener("load",function(){
//     console.log('scroll!');
// });

window.addEventListener("load", (event) => {
    alert("page is fully loaded");
  });
  

// Ques 2
// Create a button on the page using JavaScript.Add an eventlistener to the button that changes the button’s color to green when it is clicked.
// Already Done

// Ques 3
let inp1 = document.querySelector("#inp-text");
let inpBox = document.querySelector("#inp-ele");

inpBox.addEventListener('input',function(){
    let letters = /^[A-Za-z]+$/;
    if(inpBox.value.match(letters)){
        inp1.innerText = inpBox.value;
    }
    else{
        alert('write alphabets only!!');
    }
});

/* some more form using chatgpt in simpler way


<!DOCTYPE html>
<html>
<head>
  <title>Simple Form Logging</title>
</head>
<body>
  <form id="myForm">
    <label>Username: <input type="text" id="username" /></label><br/>
    <label>Password: <input type="password" id="password" /></label><br/>
    <label>Email: <input type="email" id="email" /></label><br/>
    <label>Age: <input type="number" id="age" /></label><br/>
    <button type="submit">Submit</button>
  </form>

  <script>
    let form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let email = document.getElementById("email").value;
      let age = document.getElementById("age").value;

      console.log("===== Form Data =====");
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Email:", email);
      console.log("Age:", age);
    });
  </script>

  <!-- (or using for of loop) 
  <script>
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent page reload
      
      console.log("===== Form Data =====");

      // Loop through all form elements
      for (let element of form.elements) {
        // Skip the submit button
        if (element.tagName === "BUTTON") continue;

        // Get name and value
        const name = element.name;
        const value = element.value;

          console.log(name + ": " + value);
      }

    });
  </script> 
</body>
</html>   */