// 1. Function to add two numbers and return result

function addNumbers(a, b) {
  return a + b;
}

// 2. Closure that retains access to a local variable

function outerFunc() {
  let count = 0;
  function innerFunc() {
    count++;
    console.log("Closure Count:", count);
  }
  return innerFunc;
}

const counter = outerFunc();  
counter();
counter();
counter();


// 3. Convert a normal function into an arrow function

// Normal function
function multiply(x, y) {
  return x * y;
}

// Arrow function
const multiplyArrow = (x, y) => x * y;


// 4. Create an array and demonstrate basic operations

let data = [10, 20, 30, 40];

console.log("Original Array:", data);

data.push(50);
console.log("After push:", data);

data.pop();
console.log("After pop:", data);

data.shift();
console.log("After shift:", data);

data.unshift(5);
console.log("After unshift:", data);

console.log("First Element:", data[0]);
console.log("Array Length:", data.length);


// 5. Use map() to multiply all values by 2

let multiplied = data.map(num => num * 2);


// 6. Use filter() to get even numbers

let evenNum = data.filter(num => num % 2 === 0);


// 7. Extract a substring from a full name

let fullName = "Ayush Kumar";
let firstName = fullName.substring(0, 5);


// 8. Replace a word in a sentence

let sentence = "JavaScript is difficult";
let updatedSentence = sentence.replace("difficult", "fun");


// 9. Use template literals to construct a greeting

let user = "Ayush";
let greeting = `Hello, ${user}! Welcome to JavaScript learning.`;
