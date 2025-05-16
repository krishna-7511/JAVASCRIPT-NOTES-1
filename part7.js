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
  
  const cube = (a) => {
    console.log(a * a * a);
  };
  // implicit return
  const mul = (a, b) => a * b;

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