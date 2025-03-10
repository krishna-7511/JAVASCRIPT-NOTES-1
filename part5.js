let delhi = {
    latitude:'27.7041° N',
    longitude:'77.1025° E'
};

const student = {
    name:'Prajwal Gandhi',
    age: 19,
    marks: [94.5,84.5]
};


 Add/Update/Delete literals
student.city  = 'Mumbai';
student.gender = "Male";
delete student.marks;

const post={
    username: "@gopikrishna",
    content: "This is my #firstPost",
    likes: 150,                              //in console post["content"]  or post.content;
    repost: 5,
    tags: ["@apnacollege","@delta"]
};


const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined : "e"
};


const student = {
    name : "krishna",
    age : 20,             
    marks : 9.02,
    city : "kolkata"
};

updating city
 student.city="Mumbai";
deleting a value of a  key
delete student.rollno;
adding value
student.gender="male";


objects of objects
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
        city: "Mumbai"     //classInfo.aman lassInfo.aman.city
    }
}

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


MATH OBJECT IN JAVASCRIPT

Math Object Properties

Math.PI
Math.E

Methods
Math.abs( n)
Math.pow( a, b)
Math.floor( n)       nearest smallest int value
Math.ceil( n)        nearest largest int value
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
        