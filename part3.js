let msg = "     hello!         ";
console.log(msg);
msg.trim();

let password = prompt("set your password");
let newpass = password.trim();
console.log(newpass);

let name = "Gopi Krishna";
// let msg = "error";

console.log(msg.toUpperCase());
console.log(name.toLowerCase());


let str = "ilikecoding"; //index founding
str.indexOf("like");

msg = "   hello...!    "; //method chaining
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);


let msg = "ilikecode"; //slice
console.log(msg.slice(1,2));
console.log(msg.slice(5));
console.log(msg.slice(-7));


//repeat & replace
let msg = "ilovecoding"
console.log(msg.replace("love" , "hate"));

let str  =  "krishna";
console.log(str.repeat(6));


Practice Qs
let msg = "help!";
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

let name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna",'Our'));

console.log(name.slice(4).replace('l','t'));


Array(DS)
let students = ["vivek","affan","aman","rahul"];
console.log(students);

let banks = ["hdfc","png","sbi"];
console.log(banks);


let num = [2,4,6,8];
console.log(num);
console.log(num[2]); //index


mixed array
let info = ['krishna',19,88.6];
// empty array
let empArr = [];
info[0] [0];

Arrays Methods
let cars = ['Ferrai','Ford','Tata'];
console.log(cars);
cars.push('Toyota');
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift('Maruti');   // add to start
console.log(cars);
cars.shift();
console.log(cars);



Practice Ques
let months = ['January','july','march','august'];
months.shift();
months.shift();
months.unshift('june');
months.unshift('july');



Arrays Methods --> Indexof(), includes(),concat(),reverse(),slice(),splice(),sort()
months.indexOf('july');
console.log(months.includes('august'));
// concat
console.log(months.concat(students));
//reverse
console.log(months.reverse());
//slice
console.log(months.slice(2));
console.log(months.slice(-3));
//splice
console.log(months.splice(3));
// console.log(months.splice(0,1));
console.log(months.splice(0,2));
console.log(months.splice(1,0,'Janauary'));
console.log();
//sort
console.log(months .sort());


//Practice Ques
months = ['January','july','march','august'];
months.splice(0,2,'july','june');


array reference:

let arr=['a','b',c];
let arrCopy=arr;
arr==arrCopy;
arr===arrCopy;

arr.push('d');
arr;
arrCopy;

array constant:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // Output: [1, 2, 3, 4, 5]

Modifying the elements of the array
numbers[0] = 10;
console.log(numbers); // Output: [10, 2, 3, 4, 5]

Adding new elements
numbers.push(6);
console.log(numbers); // Output: [10, 2, 3, 4, 5, 6]

Removing elements
numbers.pop();
console.log(numbers); // Output: [10, 2, 3, 4, 5]

❌ Reassigning a new array to the constant variable will cause an error
numbers = [100, 200, 300]; // TypeError: Assignment to constant variable.


nested arrays:
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(nestedArray[0]); // [1, 2, 3]
console.log(nestedArray[1][1]); // 5 (Second row, second column)
console.log(nestedArray[2][0]); // 7 (Third row, first column)

nestedArray.push([10, 11, 12]); // Adds a new row
console.log(nestedArray);

nestedArray.pop(); // Removes last row
console.log(nestedArray);

nestedArray.unshift([0, 0, 0]); // Adds a row at the beginning
console.log(nestedArray);

nestedArray.shift(); // Removes first row
console.log(nestedArray);


Pratice Ques
tic-tac-toe
let gameBoard = [['X',null,'O'],[null,'X',null],['O',null,'X']];
gameBoard[0][1] = 'O';


ans1:
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);


ans2:
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(arr.length-n);
console.log(ans);

ans3:
let str = prompt("please enter a string");
if(str.length == 0) {
console.log("string is empty");
} else {
    onsole.log("string is not empty");
}

ans4:
let str = "ApNaCoLlEgE";
let idx = 3;
if(str[idx] == str[idx].toLowerCase()) {
console.log("character is lowercase");
} else {
console.log("character is not lowercase");
}


ans5:
let str = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);


ans6:
let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
console.log("element doesn't exist in array");
}

