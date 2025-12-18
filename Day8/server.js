// 1. Install Node.js and create a .js file that logs a message.

console.log("JavaScript through Node.js");

// 2. Read environment variables using process.env.

console.log("Currently running on : ", process.env.NODE_ENV);

// 3. Create a simple file using fs.writeFileSync().

const fs = require('fs');

const content = "JS content in this file."
// fs.writeFileSync('JS.txt', 'JS related content is present here.');

try {
    // fs.writeFileSync('JSFile.txt', content);
    fs.writeFileSync('JSFile.txt', content2);
} catch (err) {
    console.log(err);
}