// 1. Extract a substring from a full name

let fullName = "Ayush Kumar";
console.log("Full Name: ", fullName);

let firstName = fullName.substring(0, 5);
console.log("First Name: ", firstName);


// 2. Replace a word in a sentence

let sentence = "JavaScript is difficult";
console.log("Sentence before update: ", sentence);

let updatedSentence = sentence.replace("difficult", "fun");
console.log("Sentence after update: ", updatedSentence);


// 3. Use template literals to construct a greeting

let user = "Ayush";
console.log(`Hello, ${user}! Welcome to JavaScript learning.`);


// 4. Create a student object with name, age, and grade

let studentObj = {
    name: "Ayush",
    age: 22,
    grade: "A"
};

console.log("Student Object: ", studentObj);


// 11. Add new property isPassed and delete grade

studentObj.isPassed = true;
delete studentObj.grade;

console.log("Updated Student Object: ", studentObj);


// 12. Access properties using dot & bracket notation

console.log("Using dot notation :-\n");
console.log("name: ", studentObj.name);
console.log("age: ", studentObj.age);
console.log("isPassed: ", studentObj.isPassed);

console.log("Using bracket notation :-\n");
console.log("name: ", studentObj["name"]);
console.log("age: ", studentObj["age"]);
console.log("isPassed: ", studentObj["isPassed"]);
