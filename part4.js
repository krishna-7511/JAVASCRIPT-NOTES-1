loops
for(let i=1;i<=5;i++){
    console.log(i);
}


for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
      console.log("Odd -", i);
    } else {
      console.log("Even -", i);
    }
  }

  
  printing all even numbers from 2 to 10

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}


for (let i = 1; i <= 50; i+=5) {
      console.log(i);
    }


    let n = prompt("write your number");
n = parseInt(n); //parseInt() convert number to string
for(let i = n; i<=n*10; i=i+n){
    console.log(i);
}



Nested Loop
for (let i = 1; i < 5; i++) {
    console.log('outerloop ${i}');
    for (let j = 1; j < 5; j++) {
      console.log(j);
    }
  }


  while loop
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}



Movie Guess Game
let favMovie = "Avatar";
let guess = prompt("Guess the movie Name: ");
while ((guess != favMovie)) {
    if(guess!='quit'){
        console.log('You Quit!!');
    }
    console.log('Wrong');
    guess = prompt("Try Again! Guess the movie Name: ");
}
if(guess==favMovie){
    console.log("Congrats!! Answer is Correct.")
}


let i = 1;
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}


Loops with arrays

let fruits = ['apple', 'banana', 'kiwi', 'pineapple', 'pomegranate', 'orange', 'litchi']
console.log(`fruits array: ${fruits}

`)
for (let i = 0; i <= (fruits.length - 1); i++) {
    console.log(i, fruits[i])

    for (let j = 0; j <= fruits[i].length - 1; j++) {
        console.log(fruits[i][j])
    }
}


nested loops with nested arrays

let heroes  = [['ironman','spiderman','thor'],['superman','wonder wonmen','flash']];
for(let i=0;i<heroes.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}


for-of loop

let fruits = ["mango","apple","banana","orange","litchi"];

for(fruit of fruits){
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}


let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for (list of heroes){
    for (elem of list) {
        console.log(elem)
    }
    console.log (list)
}


todo app:


let todo = [];

let req = prompt('please enter your request');

while(true){
    if(req=='quit'){
        console.log('quiting app');
        break;
    }

    if(req=='list'){
        console.log('___________');
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('___________');
    }
    else if(req=='add'){
        let task = prompt('please enter the task you want to add');
        todo.push(task);
        console.log('task added');
    }
    else if(req == 'delete'){
        let idx = prompt('please enter the task index');
        todo.splice(idx,1);
        console.log('task deleted');
    }
    else{
        console.log('Wrong request!!');
    }
    req = prompt('please enter your request');
}



ans1:
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
if(arr[i] == num) {
arr.splice(i, 1);
}
}
console.log(arr);

ans2:
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
count++;
copy = Math.floor(copy/10);
}
console.log(count);

ans3:
let number = 287152;
let sum = 0;
let copy = number;
while(copy > 0) {
digit = copy % 10;
sum+= digit;
copy = Math.floor(copy/10);
}
console.log(sum);


ans4:
let n = 5;
let factorial = 1;
for(let i=1; i<=n; i++) {
factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

ans5:
let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for(let i=0; i<=arr.length; i++) {
if(largest < arr[i]) {
largest = arr[i];
}
}
console.log(largest);






