// 1. Create a function that logs a message after 2 seconds using setTimeout.

let msg = () => {
    setTimeout(() => {
        console.log("This message appeared after 2 seconds.");
    }, 2000);
};
msg();

// 2. Build a Promise that resolves after 1 second and logs a message.

new Promise((resolve, reject) => {
    setTimeout(() => resolve("Its resolved"), 1000);
}).then((res) => console.log(res));

// 3. Chain .then() and .catch() to handle resolved and rejected cases.

const promise = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    if (num > 5) {
        resolve("Yay its resolved");
    } else {
        reject("Oh no its rejected");
    }
})

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// 4. Destructure an object and log the values.

const user = {
    firstName: "Ayush",
    age: 23,
    programmingLang: "JS"
};

const { firstName, age, programmingLang } = user;

console.log("First Name:", firstName);
console.log("Age:", age);
console.log("Programming Lang:", programmingLang);

// 5. Use spread to merge two arrays.

const arr1 = [3, "hi", true];
const arr2 = [34, 52, "no"];

const newArr = [...arr1, ...arr2];

console.log("New Array:", newArr);


// 6. Write a function with default parameters and call it with and without arguments.

const greet = (user = "guest", msg = "hello") => console.log(`${msg} ${user}`);

greet("Ayush", "hey");
greet();
