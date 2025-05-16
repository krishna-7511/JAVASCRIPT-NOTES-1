//Function initialize
function hello() {
    console.log("Hello");
  }
  
  // Function call
  hello();



  function printName(){
    console.log("krishna");
}
printName();


function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();


function isAdult(age = 13) {
    if (age >= 18) {
        console.log("Adult.");
    } else {
        console.log("Not Adult.");
    }
}

// Test Cases
isAdult(20); // Output: Adult.
isAdult(15); // Output: Not Adult.
isAdult();   // Output: Not Adult. (default value of 13 is used)



function printPoem() {
    console.log("Twinkle Twinkle little stat");
    console.log("how I wonder what you are");
  }
  printPoem();
  

  function rollDice() {
    let roll = Math.random();
    roll *= 6;                                   //long process
    roll = Math.floor(roll);
    roll += 1;

    roll = Math.floor(Math.random() * 6) + 1;                      //shorthand
    console.log("Dice rolled to: ", roll)
}

rollDice()
rollDice()
rollDice()


function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("krishna", 25);



function sum(a,b){
    console.log(a+b);
}
sum(3,5);



function averageOf3(a, b, c) {
    let average = a + b + c;
    average /= 3;
    console.log(`Sum of ${a},${b},${c} is: `, average)
}

averageOf3 (3,6,9)
averageOf3 (3,3,3)



//practice question 4 (Print table of given number)

function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
      console.log(i);
    }
  }
  
  printTable(2);



  //return keyword
function sun(a, b) {
    return a + b;
  }
  
  console.log(sun(3, 4));
  


function isAdult(age){
    if(age>=18){
        return "Adult";
    } else{
        return "Not adult";
    }
    console.log("OK");
}
isAdult(28);

// P QS 5

function getSum(n){
    let sum = 0;

    for(let i=1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
// P QS 5

//p qs 6
let str = ["md","gopi","krishna"];

function concat(str){
    let result = " ";

    for(let i=0; i < str.length; i++){
        result  = result + str[i];
    }
    return result;
}
console.log(concat(str));




//Example of Block Scope
javascript

{
    let a = 10;
    const b = 20;
    console.log(a); // 10
    console.log(b); // 20
}
console.log(a); // Error: a is not defined
console.log(b); // Error: b is not defined


{
    var c = 30;
}
console.log(c); // 30 (Accessible outside the block)
Here, c is accessible outside the block because var does not have block scope.

//Block Scope in Loops

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // Error: i is not defined
With let, the variable i is only available inside the loop.
Using var instead would make i accessible outside the loop.


if (true) {
    let x = 100;
    console.log(x); // 100
}
console.log(x); // Error: x is not defined



//Lexical scope
function outerFun() {
    let x = 5;
    let y = 6;
    function innerFun() {
        console.log(x);
    }
    innerFun();
}

outerFun();

--------------------------------------------


//P Qs 7
let greet  = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();



//anonymous function expression.
let sum = function(a,b,c){
    return a+b+c;
}

let hello = function(){
    console.log("hello");
}


/*
    Explanation:
let keyword:

It declares a variable named sum.

let allows block-scoped variable declaration.

Anonymous Function:

The function is defined without a name (function(a, b, c) {...}).

This type of function is called an anonymous function.

Function Expression:

This is a function expression, where a function is assigned to a variable (sum).

Unlike function declarations, function expressions are not hoisted. This means they can only be used after they are defined.

Variable Name (sum):

The variable sum becomes the function name because it stores the anonymous function.

You can call this function using sum(1, 2, 3).

In Summary:
sum is the name of the variable that stores the function.

The function itself is anonymous because it does not have its own name.

This is called an anonymous function expression.
*/


//Higher order function
function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet, 5);




//Returns a function
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }

        return even;
    } else {
        console.log("wrong request");
    }
    
}
let request = "odd"; // even

---------------------------------------------





//methods
const calculator = {
    num:55,
    add : function(a, b){
        return a + b;
    },
    sub : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }
};
console.log(calculator.add(5,6));
console.log(calculator.mul(5,7));


//METHODS SHORTHAND IN JAVASCRIPT

const calc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}

 //Print the Entire Object:
console.log(calc);
//Print a Specific Method Result
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.sub(5, 3)); // Output: 2
//Print All Methods with Their Definitions:
console.log(calc.add.toString());
console.log(calc.sub.toString());


//Print the Code Directly (as a String):
console.log(`
const calc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}`);


Ans 1:
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num
function getElements(arr, num) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] > num) {
console.log(arr[i]);
}
}
}
getElements(arr, num);


//Ans 2:
let str = "abcdabcdefgggh";

// Function to get a string with all unique elements
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        // If current character is not added, then add it in
        if (ans.indexOf(currChar) === -1) {
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str)); // Output: "abcdefgh"


//Ans 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
  let ansIdx = 0;
  let ansLen = country[ansIdx].length; // Initialize ansLen outside the loop

  for (let i = 1; i < country.length; i++) { // Start from index 1 to avoid redundant comparison
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
      ansLen = currLen; // Update ansLen with the new longest length
    }
  }

  return country[ansIdx];
}

console.log(longestName(country));




//Ans 4
let str = "apnacollege";

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
} // <-- missing closing brace here

console.log(countVowels(str)); // This will output 5



//Ans 5
let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}

