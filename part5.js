let delhi = {
    latitude: '27.7041° N',
    longitude: '77.1025° E'
};

// Printing the values
console.log("Latitude:", delhi.latitude);
console.log("Longitude:", delhi.longitude);


const student = {
    name:'Prajwal Gandhi',
    age: 19,
    marks: [94.5,84.5]
};

console.log(student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Marks:", student.marks);



 Add/Update/Delete literals
student.city  = 'Mumbai';
student.gender = "Male";
delete student.marks;

// Initial Object
const post = {
    username: "@gopikrishna",
    content: "This is my #firstPost",
    likes: 150,
    repost: 5,
    tags: ["@apnacollege","@delta"]
};

// 1. Adding Fields
post.comments = 20;
post["shares"] = 10;

// 2. Updating Fields
post.likes = 200;
post["repost"] = 10;

// 3. Deleting a Field
delete post.shares;

// Displaying Final Object
console.log(post);



const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined : "e"
};

console.log(obj);

//Using Object.keys() to list all keys
console.log("Keys:", Object.keys(obj));
//Using Object.values() to list all values
console.log("Values:", Object.values(obj));

// using for loop to print
for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}





const student = {
    name : "krishna",
    age : 20,             
    marks : 9.02,
    city : "kolkata"
};

//updating city
 student.city="Mumbai";
//deleting a value of a  key
delete student.rollno;
//adding value
student.gender="male";
console.log(student);


//objects of objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    piyush:{
        grade: "A",
        city: "Dehradun"
    },
    shraddha: {
        grade: "B+",
        city: "Mumbai"     //classInfo.aman classInfo.aman.city
    }
}

console.log(classInfo);
//  Accessing Individual Properties
console.log(classInfo.aman.grade);   // Output: A+
console.log(classInfo.aman.city);    // Output: Delhi

console.log(classInfo.piyush.grade); // Output: A
console.log(classInfo.piyush.city);  // Output: Dehradun

console.log(classInfo.shraddha.grade); // Output: B+
console.log(classInfo.shraddha.city);  // Output: Mumbai

//Using Bracket Notation
console.log(classInfo["aman"]["grade"]);   // Output: A+
console.log(classInfo["aman"]["city"]);    // Output: Delhi

console.log(classInfo["piyush"]["grade"]); // Output: A
console.log(classInfo["piyush"]["city"]);  // Output: Dehradun

console.log(classInfo["shraddha"]["grade"]); // Output: B+
console.log(classInfo["shraddha"]["city"]);  // Output: Mumbai


// Arrays of Objects
const classInfo1 = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "piyush",
        grade: "A",
        city: "Dehradun"
    }
];

console.log(classInfo1);
// Use console.table() to display it as a formatted table in the browser’s developer console:
console.table(classInfo1);



//MATH OBJECT IN JAVASCRIPT

//Math Object Properties

Math.PI
Math.E

// Math.PI and Math.E
// Math.PI is a constant representing the value of π (pi), approximately 3.14159.

// Math.E is a constant representing Euler's number e, approximately 2.71828.

// These are just fixed mathematical constants you can use in calculations.

Methods
Math.abs( n)
Math.abs(-5)   // returns 5
Math.abs(3)    // returns 3

Math.pow( a, b)
Math.pow(2, 3)  // 2^3 = 8
Math.pow(5, 2)  // 5^2 = 25

Math.floor( n)     //  nearest smallest int value
Math.floor(4.7)   // returns 4
Math.floor(-5.3)  // returns -6  (because -6 < -5.3)

Math.ceil( n)        nearest largest int value
Math.ceil(4.2)   // returns 5
Math.ceil(-5.3)  // returns -5 (because -5 > -5.3)

Math.random()


console.log (Math.pow(2,5))
console.log (Math.floor(-5.5))
console.log (Math.ceil(-5.5))

//generate a random between 10 to 20

let ran = Math.random() * 20;
console.log(Math.floor(ran) + 10);

num=Math.floor(num);   integer numbers
Math.floor(Math.random()*10)+1;   all above three steps 

random number genrator in JavaScript
range = (1,tillWhat)

let num = Math.random () ;
let tillWhat = prompt ("Enter to Which number you want a Random Number: ") ;
// tillWhat = 10;
tillWhat = parseInt (tillWhat)

num = num * tillWhat
num = Math.floor (num)          //returns a integer
num = num + 1                   // to get exactly tillWhat number as a random integer & NOT 0

console.log ("random Number: ", num)


guessing number game

 const max = prompt("Enter the max number");
 const random=Math.floor(Math.random() * max) +1;

let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats!! random number was", random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint : your guess was too small.please try again");
    }
    else{
        guess=prompt("hint : your guess was too large.please try again");
    }
}


practise ques

ans1:
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

ans2:
const car = {
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "white",
    };
    console.log(car.name);

ans3:
const Person = {
name: "Jane Doe",
age: 21,
city: "New Jersey",
};
    Person.city = "New York";
    Person.country = "United States";
    console.log(Person);
        