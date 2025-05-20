// this keyword
const student = {
  name: "krishna",
  age: 20,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`ahh! ${this.name}, of age ${this.age}, got MARKS: `, avg);
    console.log(avg);
  },
};

function getAvg() {
  console.log(this);
}  

//What is this in JavaScript?
The this keyword refers to the object that is executing the current function.
it means calling function

const person = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, Alice
Here, this.name refers to person.name because greet is a method of person.

✅ 2. In a Function (Global Context)
In a regular function, this refers to the global object (window in browsers or global in Node.js).

function show() {
  console.log(this);
}

show(); // In browser: logs `window` object
In strict mode ('use strict'), this will be undefined.

✅ 3. In Arrow Functions
Arrow functions do not have their own this. They inherit this from the surrounding scope.

const obj = {
  name: "Bob",
  greet: function () {
    const arrowFunc = () => {
      console.log(this.name);
    };
    arrowFunc();
  }
};

obj.greet(); // Output: Bob
this inside arrowFunc is the same as this inside greet.

✅ 4. In Constructors
In a constructor function or class, this refers to the new object being created.

function Car(model) {
  this.model = model;
}

const myCar = new Car("Tesla");
console.log(myCar.model); // Output: Tesla
this.model refers to the property being set on the newly created myCar object.

✅ 5. In Event Handlers
In an event handler, this refers to the DOM element that received the event.

<button onclick="show()">Click me</button>

<script>
  function show() {
    console.log(this); // refers to the <button> element
  }
</script>
✅ 6. Using bind, call, and apply
You can manually set this using call, apply, or bind.

const person = {
  name: "Charlie"
};

function sayHello() {
  console.log("Hello " + this.name);
}

sayHello.call(person); // Output: Hello Charlie
call() calls the function and sets this to person.

✅ 7. In Classes
this in a class refers to the instance of the class.

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user1 = new User("David");
user1.greet(); // Output: Hello David

  
  // try & catch
  console.log("hello");
  console.log("hello");
  console.log("hello");
  // let a = 5;
  try {
    console.log(a);
  } catch (err) {
    console.log("caught an error... a is not defined.");
    console.log(err);
  }
  console.log("hello2");
  console.log("hello2");
  console.log("hello2");
  
  // Arrow functions
  const sum = (a, b) => {
    console.log(a + b);
  };
  
  sum(2,5);
  
  const cube = (a) => {
    console.log(a * a * a);
  };

  cube(5);
  // implicit return
  const mul = (a, b) => a * b;
  console.log(mul(5,10));
// set Timeout
console.log("hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("welcome to");

// ------------------------------------------------------

// set Interval
console.log("hi there!");

let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

console.log("welcome to");

clearInterval(id); // stop 

// ----------------------------------------------------

  
  // this keyword with arrow functions
  const student1 = {
    name: "aman",
    marks: 95,
    prop: this, // global scope
    getName: function () {
      console.log(this);
      return this.name;
    },
    getMarks: () => {
      console.log(this); // paretnt's scope ->> window
      return this.marks;
    },
    getInfo1: function () {
      setTimeout(() => {
        console.log(this); // student object
      }, 2000);
    },
    getInfo2: function () {
      setTimeout(function () {
        console.log(this);    //window
      }, 2000);
    },
  };
  
  // Practice Ques
  // Ques 1
const square = (n) => n*n;
console.log(square(7));

  
// Prints "Hello World" 5 times at intervals of 2s each.
// Ques 2
let id1 = setInterval(() => {
    console.log("Hello World");
  }, 2000);
  
  setTimeout(() => {
    clearInterval(id1);
    console.log("time out");
  }, 10000);


  
  // Assignment Part 7 (JavaScript)
  // Ans-1
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total/arr.length;
}
let arr = [1,2,3,4,5];
console.log(arrayAverage(arr));

// ------------------------------------------------

// Ans-2
const isEven = (n) => {
    let num = (n%2 == 0) ? "Even" : "Odd";
    console.log(num);
}
isEven(10);

// ------------------------------------------------

// Ans-3 
const object = {
    message : "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

// -------------------------------------------------

// Ans-4
let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length : 5,
    method(callback){
        callback();
    },
};
object1.method(callback, 1, 2);