// 1. Declare variables using all three keywords
var name = "Ayush";
let currAge = 25;
const country = "India";

console.log(name, age, country);

// 2. Create an object and log one key
const student = {
  id: 101,
  fullName: "Ayush Kumar",
  isActive: true
};

console.log(student.fullName);

// 3. Store different data types & log their typeof
let text = "Hello";     
let num = 42;        
let isLoggedIn = false;   
let score = null;    
let data;              
let items = [1, 2, 3]; 
let user = { name: "Ayush" };

console.log(typeof text);
console.log(typeof num);
console.log(typeof isLoggedIn);
console.log(typeof score);       
console.log(typeof data);
console.log(typeof items);       
console.log(typeof user);

// 4. Convert a string "42" into a number and add 8
let strNum = "42";

console.log("Before conversion:", typeof strNum); 

let convertedNum = Number(strNum);
let result = convertedNum + 8;

console.log("After conversion:", typeof convertedNum);
console.log("Result of 42 + 8 =", result);


// 5. Add a number and a string (implicit vs explicit)
let number = 10;
let str = "5";

let impResult = number + str;

console.log("Implicit (10 + '5') =", impResult);
console.log("Type:", typeof impResult);

let expResult = number + Number(str);

console.log("Explicit (10 + Number('5')) =", expResult);
console.log("Type:", typeof expResult); 


// 6. Create a simple calculator using arithmetic operators
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


// 7. Compare two variables using == and ===
let x = 10;
let y = "10";

console.log("x == y:", x == y);
console.log("x === y:", x === y);


// 8. Condition using && and || to check age eligibility
let age = 17;

if (age >= 18 && age <= 60) {
  console.log("Eligible: Age is between 18 and 60");
} else if (age < 18 || age > 60) {
  console.log("Not eligible: Age is either below 18 or above 60");
}


// 9. Check if a number is positive, negative, or zero
let numCheck = -3;

if (numCheck > 0) {
  console.log("Number is positive");
} else if (numCheck < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}


// 10. Print numbers 1 to 10 using different loops

// For loop
console.log("For loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// While loop
console.log("While loop:");
let w = 1;
while (w <= 10) {
  console.log(w);
  w++;
}

// Do-While loop
console.log("Do-While loop:");
let d = 1;
do {
  console.log(d);
  d++;
} while (d <= 10);


// 11. Use switch to log the day of the week
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}
