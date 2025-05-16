// template literals:
   
let specialString=`This is a template literal`;
console.log(typeof specialString);


   let obj ={
    item:"pen",
    price:10,
   };
        
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
 
console.log("the cost of", obj.item,"is", obj.price, "rupees");   

// arithmatic operators:

 let num1 = 2;
 let num2 = 4;
let totalSum = num1+num2;
let totalDiff = num1-num2;
let totalMul = num1*num2;
let totalDiv = num1/num2;
let totalRemainder = num1%num2;
let exponentiationOperator=num1**num2;
console.log("Arithmetic Operator's")
console.log(totalSum);
console.log(totalDiff);
console.log(totalMul);
console.log(totalDiv);
console.log(totalRemainder);
console.log(exponentiationOperator);

// Uniary Operator's ++,--
console.log("Uniary Operator's")
console.log(num1);
console.log(num1++);
console.log(num1);
console.log(num1--);
console.log(num1);

// comparison operators: (equal to ==, equal to & type ===, not equal to !=, not equal to & type !==,>,>=,<,>=)

let a=5;     //number
let b="5";    //string
console.log("a==b",a==b);   //implicitly convert string to integer  checks only value
    
console.log("a===b",a===b);  //checks datatype also

console.log("a!=b",a!=b);     //

console.log("a!==b",a!==b);


// comparison for non-numbers unicodes check it google

if statement
if(age>=18){
    console.log("you can vote");
    console.log("you can drive");
}
else{
    console.log('you are not eligible for vote & drive');
}


// practise qs
// traffic light sysyem using js


let color = "green";

traffic light system
if(color==='red'){
    console.log('Stop!');
}
if(color==='yellow'){
    console.log('slow down');
}
if(color==='green'){
    console.log('Go. light is green.')
}

let marks = 20;
if(marks>=80){
    console.log('A+');
}
else if(marks>=60){
    console.log('A');
}
else if(marks>=33){
    console.log('B');
}
else if(marks<33){
    console.log('F');
}

if(age>=18){
    console.log('you can vote & drive');
}
else{
    console.log("you can't vote & drive");
}


//  Practice ques
let size = 'L';
if(size==='XL'){
    console.log('Rs. 250');
}
else if(size==='L'){
    console.log('Rs.200');
}
else if(size==='M'){
    console.log('Rs.100');
}
else{
    console.log('Rs.50');
}


// nested if-else statement
if(marks>33){
    if(marks>=80){
        console.log('A+');
    }
    else if(marks>=60){
        console.log('A');
    }
    else{
        console.log('B')
    }
}

else{
    console.log('Better Luck Next Time!')
}



// logical operator's  ->  &&, ||, !
let subMarks = 90;
if(subMarks >=33 && subMarks >=80 ){
    console.log('pass');
    console.log('A+');
}

if(subMarks >=33 || !false ){
    console.log('pass');
    // console.log('A+');
}

// Practice Ques
let str = 'app';

if(str.length > 3 && str[0] ==='a'){
    console.log('Good String');
}
else{
    console.log('Bad Stirng');
}

let str = "";
if(str){
    console.log("it has true value");
}
else{
    console.log("it has false value");
}

Falsy Values in JavaScript:

JavaScript has only 7 falsy values:

false - The boolean value false.

0 - The number zero.

-0 - The negative number zero.

"" or '' or `` (Empty String) - A string with no characters.

null - Represents the absence of value.

undefined - A variable that has been declared but not assigned a value.

NaN - Not a number.


Truthy Values in JavaScript:

Any value that is not falsy is considered truthy.

Examples of truthy values:

true

"Hello" (any non-empty string)

42 (any non-zero number)

[] (an empty array)

{} (an empty object)

function() {} (a function)

// PRACTICE QUESTION(2)
Qs. Use switch statement to print the day of the week using a number variable 'day' with
values 1 to 7.
1 = Monday, 2 = Tuesday & so on

let day = prompt ("Enter the weekday(1-7): ",1)
switch (day) {
    case "1":
        console.log("Monday")
        break;
    case "2":
        console.log("Tuesday")
        break;
    case "3":
        console.log("Wednesday")
        break;
    case "4":
        console.log("Thursday")
        break;
    case "5":
        console.log("Friday")
        break;
    case "6":
        console.log("Saturday")
        break;
    case "7":
        console.log("Sunday")
        break;
    default :
    console.log("Err!: Enter week day ranging from 1 to 7.")
}

#VARIOUS ALERTS, ERRORS, WARNINGS

alert("Please do NOT press any key.")
console.warn("pressing any key would exit this Gateway!")
console.error("101: Pressed a key....exitting")


concatinating fName and Lname using prompt()

let fName = prompt ("Enter your First Name: ")
let lName = prompt ("Enter your Last Name: ")
let welcomeMessage = `Welcome, ${fName} ${lName}!` ;
console.log (welcomeMessage, "[On your Pop-Up]")
alert (welcomeMessage)


ans1:
let num = 20;
if(num % 10 == 0) {
console.log("good");
} else {
console.log("bad");
}

ans2:
let name = prompt("please enter your name");
let age = prompt("please enter your age");
alert(`${name} is ${age} years old.`);


ans3:
let quarter = 1;
switch(quarter) {
case 1 : console.log("January, February, March");
break;
case 2 : console.log("April, May, June");
break;
case 3 : console.log("July, August, September");
break;
case 4 : console.log("October, November, December");
break;
default : console.log("NOT A QUARTER!");
}


ans4:
let str = "apples";
if( (str[0] == 'a' || start[0] == 'A') && (str.length > 5) ) {
console.log("golden string");
} else {
console.log("not a golden string");
}


ans5:
let a = 5;
let b = 18;
let c = 13;
if(a > b) {
    if(a > c) {
    console.log(a, "is largest");
    } else {
    console.log(c, "is largest");
    }
    } else {
    if(b > c) {
    console.log(b, "is largest");
    } else {
    console.log(c, "is largest");
    }
}

bonus:
let num1 = 32;
let num2 = 47852;
if( (num1%10) == (num2%10)) {
console.log("numbers have the same last digit which is",
num1%10);
} else {
console.log("numbers don't have the same last digit");
}

    
