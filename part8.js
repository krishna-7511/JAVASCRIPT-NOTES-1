// Arrays Methods
let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

arr.forEach(print);
// OR
arr.forEach(function (el) {
  console.log(el);
});

let students = [
  {
    name: "gopi krishna",
    age: 18,
    marks: 97,
  },
  {
    name: "Shraddha",
    age: 25,
    marks: 94,
  },
  {
    name: "Manish kumar",
    age: 26,
    marks: 99,
  },
];

arr.forEach((student) => {
  console.log(student);
});

/*
    let students = [
  { name: "gopi krishna", age: 18, marks: 97 },
  { name: "Shraddha", age: 25, marks: 94 },
  { name: "Manish kumar", age: 26, marks: 99 },
];

// Calculate GPA
let gpa = students.map(({ marks }) => marks / 10);
console.log(gpa); // [9.7, 9.4, 9.9]
console.log(gpa[0]); // 9.7

// Function to find student property
const getStudentProperty = (name, property) => {
  const student = students.find(student => student.name === name);
  return student ? student[property] : null;
};

// Get Marks of "Manish kumar"
console.log(getStudentProperty("Manish kumar", "marks")); // 99

// Get Age of "Manish kumar"
console.log(getStudentProperty("Manish kumar", "age")); // 26
 */

// Map
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * el;
});


console.log(double);


let gpa = students.map((el) => {
  return el.marks / 10;
});

console.log(gpa);

// fliter
let num = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = num.filter((el) => {
  return el % 2 == 0;
});

console.log(ans);

// every
let check = [2,4,6].every((el) => (el % 2 == 0));

// (or)
// let check = [2,4,6];
// check.every((el)=>{
//    console.log(el % 2 == 0);
// });
   

// some 
let check1 = [1,5,3,2].some((num) => (num % 2 == 0));

// ------------------------------------------------


// reduce
[1, 2, 3, 4].reduce((res, el) => res + el);

//(or) sum of numbers

   [1, 2, 3, 4].reduce((res, el) => {
    console.log(res + el);
    return res + el; // Important to return the accumulated value!
});

let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(result);


// reduce - Maximum in array.
let num1 = [2,3,4,5,3,4,7,8,1];

let res = num1.reduce((max, el) => {
    if(el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(res);
//          OR
let largest = -Infinity;
for(let i=0; i<num1.length; i++){
    if(largest < num1[i]){
        largest = num1[i]
    }
};
console.log(largest); 

// -----------------------------------------------

// Practice Os

// Check if all numbers in our array are multiples of 10 or not.               [done]

let example1 = [20, 30, 50, 90, 80, 110, 70];
let example2 = [40, 30, 50, 85, 90, 67];

let val = example1.every((el) => el % 10 == 0)
console.log(val)
let val2 = example2.every((el) => el % 10 == 0)
console.log(val2)



// Create a function to find the min number in an array.               [done]

let examArray = [54, 64, 89, 17, 93, 45, 62, 36, 27]

// let minNum = examArray.reduce ((res,el) => {
//     if (res> el) {
//         return el;
//     }else {
//         return res;
//     }
// })
// console.log ("Minimum of Array : ", examArray)
// console.log ("is: ", minNum)




// Default parameters
function sum(a=5,b=3){
  return a+b;
}
sum(2);


const numbers = [3, 1, 7, 2, 9];
const minValue = Math.min(...numbers);
console.log(minValue); // Output: 1


// What is the spread operator?
// The spread operator ... takes an iterable (like an array) and expands it into individual elements.

// So ...numbers transforms the array [3, 1, 7, 2, 9] into 3, 1, 7, 2, 9 (individual numbers).

// Therefore, this line effectively becomes:

// const minValue = Math.min(3, 1, 7, 2, 9); internally spread operator (...) changed it as number


// -------------------------------------------


// spread with array literals
const arr1 = [1, 2, 3];
const copy = [...arr1];

console.log(copy); // Output: [1, 2, 3]
console.log(copy === arr1); // false (they are different objects)

// ------------------------------------------
//with object Literals
let data = {
  email: 'krishna@gmail.com',
  password: 'adbude',
};

let dataCopy = {...data,id:123};
console.log(dataCopy);

// rest parameters

function sum(...args){
    //arguments
    for(let i=0; i<args.length; i++){
        console.log("you gave us:", args[i]);
    }
} 
sum(1,2,3,4);

function min() {
    console.log(arguments);
}

console.log(sum(1,2,3));

function sum(...args) {
    return args.reduce((add, el) => add + el);
}
console.log(sum(4,5,6));

function min(...args) {
    return args.reduce((min, el) => {
        if (el > min) {
            return min;
        } else {
            return el;
        }
    });
}

console.log(min(4,5,6));


function greet(message, ...names) {
  for (let name of names) {
    console.log(`${message}, ${name}!`);
  }
}

greet("Hello", "Alice", "Bob", "Charlie");


// ----------------------------------------------

// Destructuring
let names = ['tony','bruce','peter','steve','abx','nnn','pqp'];
// let winner = names[0];
// let runnerUp = names[1];
// let secondRunnerup = names[2];
let [winner,runnerUp,...others] = names;


// with Objects
const student = {
  name: 'karan',
  class: 9,
  age: 14,
  subjects: ['hindi','english','math','science'],
  username: 'karan123',
  password: 1234,
};

let {username:user, password:secret, city:place = "Mumbai"} = student;
console.log(user);


// Assignment 
//Ques 1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);


// Ques 2
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));


// Ques 3
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));


// Ques 4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
    ];
    doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
    doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]
    

// Ques 5
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2,
//c:3, d:4}
