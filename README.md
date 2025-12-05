# JavaScript Notes & Concepts

## 📘 JavaScript Best Practices Guide

### 🧠 1. Clean, Readable & Maintainable Code

- Use meaningful variable/function names.
- Follow camelCase.
- Avoid magic numbers → use constants.
- Functions should follow SRP (Single Responsibility Principle).
- Keep code modular and reusable.

**Examples:**

```js
let totalPrice = items * price; // Good
let tp = items * price; // Bad

const MAX_RETRIES = 3;
if (attempts > MAX_RETRIES) {
}
```

---

### 📁 2. Code Organization

- Keep imports at the top.
- Group related utilities.
- Avoid global variables (prefer block scope).

**Example:**

```js
// utilities.js
function validateEmail() {}
function validatePassword() {}
```

---

### 🎨 3. Consistent Formatting & Style

- Use consistent indentation.
- Add spaces around operators.
- Keep braces on the same line.
- End statements with semicolons.

**Example:**

```js
let sum = a + b;
if (isValid) {
  /* ... */
}
```

---

### 🛡️ 4. Error Handling & Edge Cases

- Use try/catch for risky operations.
- Provide meaningful error messages.
- Handle null/undefined/empty structures.
- Never ignore errors.

**Example:**

```js
try {
  const data = JSON.parse(jsonString);
} catch (err) {
  console.error("Invalid JSON:", err.message);
}
```

---

### 📝 5. Documentation (JSDoc)

```js
/**
 * Calculates the sum of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

---

### 🧪 6. Testing & Validation

- Write unit tests.
- Validate input.
- Use ESLint.

**Example:**

```js
if (!email.includes("@")) throw new Error("Invalid email");
```

---

### ⚡ 7. Performance Optimization

- Avoid heavy operations in loops.
- Reduce DOM manipulations.
- Use array methods like map/filter/reduce.
- Cache repeated results.
- Use appropriate data structures.

---

### 🔐 8. Security Best Practices

- Sanitize all inputs.
- Never trust client-side data.
- Avoid storing sensitive info.
- Use HTTPS + secure cookies.

**Example:**

```js
element.textContent = userInput; // Safe
element.innerHTML = userInput; // Unsafe
```

---

### 🔄 9. Asynchronous JavaScript

- Prefer async/await.
- Don’t block the event loop.
- Use Web Workers for heavy tasks.

**Example:**

```js
async function fetchData() {
  try {
    const res = await fetch("/api/data");
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
```

---

### 🌍 10. Cross-Browser, Accessibility & Responsive

- Use feature detection.
- Use semantic HTML.
- Test across browsers.

---

### 🤝 11. Version Control & Team Practices

- Use Git.
- Write meaningful commit messages.
- Avoid code duplication.
- Refactor regularly.
- Do code reviews.

---

# Introduction to JavaScript

## 🔹 What is JavaScript & Its Interaction with HTML/CSS

- JavaScript is a high-level scripting language used to make web pages dynamic and interactive.
- It works alongside:

  - **HTML** → defines the structure of a webpage.
  - **CSS** → controls the visual appearance and styling.
  - **JavaScript** → adds interactive behavior.

- Key capabilities of JavaScript:

  - Modify or generate HTML content dynamically.
  - Change CSS styles during runtime to update UI.
  - Respond to user actions like clicks, typing, scrolling, gestures.
  - Communicate with servers using fetch/AJAX without reloading the page.
  - Store information in the browser (localStorage, sessionStorage, cookies).

- Universally supported across all modern browsers.
- Enables modern web applications via tight integration of HTML + CSS + JS.

## 🔹 JavaScript in the Browser — JavaScript Engine (V8)

- Browsers do not directly execute JS; a **JavaScript engine** processes it.
- Popular engine: **V8** (Chrome, Node.js).
- Engine steps:

  1. **Parse** code into internal representation.
  2. **Compile** code into machine instructions.
  3. **Execute** optimized machine code.

- Works with browser APIs to:

  - Manipulate DOM.
  - Handle events.
  - Access storage and timers.
  - Make network requests.

- Runs in a sandboxed environment:

  - Cannot access user's files.
  - Cannot run OS commands.
  - Limited to browser-safe operations.

---

# Variables & Data Types

## 🔹 Declaring Variables: var, let, const

- `let` → block-scoped, modern, recommended.
- `const` → cannot be reassigned; best for fixed values.
- `var` → function-scoped; avoid in modern JS.
- Variables must start with letter / `_` / `$`.
- Use camelCase naming.

**Example:**

```js
let userName = "Alice";
const MAX_COUNT = 5;
var oldVar = 10; // avoid
```

---

## 🔹 Primitive Data Types

JavaScript is dynamically typed.

- **number** → integers, floats, NaN, Infinity
- **string** → text values ('', "", backticks)
- **boolean** → true/false
- **null** → intentional empty value
- **undefined** → declared but not assigned

**Example:**

```js
let age = 25;
let name = "John";
let isActive = true;
let data = null;
let info; // undefined
```

---

## 🔹 Reference Types: Objects, Arrays, Functions

### **Object**

- Key-value pairs.

```js
let user = { name: "Alice", age: 30 };
```

### **Array**

- Ordered list, zero-indexed.

```js
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
```

### **Function**

- First-class objects.

```js
function greet(name) {
  return `Hello, ${name}`;
}

const greet2 = function (name) {
  return `Hi, ${name}`;
};
```

---

# Dynamic Typing & Type Conversion

## 🔹 Understanding Dynamic Typing in JavaScript

- JavaScript is **dynamically typed**, meaning variables do **not** have fixed types.
- A variable can hold different types at different times.
- Type is determined at runtime.

**Example:**

```js
let value = 10; // number
value = "hello"; // now a string
value = true; // now a boolean
```

---

## 🔹 Implicit Type Conversion (Type Coercion)

JavaScript automatically converts types when needed.

### Common cases:

- Number + string → **string**

```js
"5" + 3; // "53"
```

- `==` triggers coercion

```js
5 == "5"; // true
```

- Boolean conversion rules:

  - `0`, `""`, `null`, `undefined`, `NaN` → **false**
  - everything else → **true**

---

## 🔹 Explicit Type Conversion

You manually convert values using built‑in functions.

### Convert to Number:

```js
Number("42"); // 42
parseInt("42px"); // 42
parseFloat("3.14"); // 3.14
```

### Convert to String:

```js
String(100); // "100"
```

### Convert to Boolean:

```js
Boolean(1); // true
Boolean(0); // false
```

---

## 🔹 typeof Operator

Returns the type of a value.

```js
typeof 10; // "number"
typeof "hi"; // "string"
typeof true; // "boolean"
typeof {}; // "object"
typeof []; // "object" (arrays are objects)
typeof null; // "object" (known JS quirk)
typeof undefined; // "undefined"
typeof function () {}; // "function"
```

---

# Operators in JavaScript

## 🔹 Arithmetic Operators

Used for mathematical operations.

```js
10 + 5; // 15
10 - 5; // 5
10 * 5; // 50
10 / 5; // 2
10 % 3; // 1 (remainder)
```

---

## 🔹 Comparison Operators

Used to compare values; return **true** or **false**.

```js
5 == "5"; // true  (loose equality)
5 === "5"; // false (strict equality: type + value)
5 != "5"; // false
3 < 5; // true
7 > 10; // false
```

---

## 🔹 Logical Operators

Used for boolean logic.

```js
true && false; // false
true || false; // true
!true; // false
```

---

# Control Structures

## 🔹 Conditional Statements

Control program flow based on conditions.

### **if / else if / else**

```js
let age = 20;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
```

### **switch**

```js
let color = "blue";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "blue":
    console.log("Cool color");
    break;
  default:
    console.log("Unknown color");
}
```

---

## 🔹 Loops

### **for** loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### **for...of** (arrays/iterables)

```js
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### **while** loop

```js
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}
```

### **do...while** loop

```js
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```

### **forEach**

```js
const nums = [1, 2, 3];
nums.forEach((n) => console.log(n));
```

---

# Functions in JavaScript

## 🔹 Function Declarations, Expressions & Arrow Functions

### **Function Declaration**

```js
function greet(name) {
  return `Hello, ${name}`;
}
```

### **Function Expression**

```js
const greet = function (name) {
  return `Hello, ${name}`;
};
```

### **Arrow Function**

```js
const greet = (name) => `Hello, ${name}`;
```

- Shorter syntax
- `this` is lexically scoped

---

## 🔹 Parameters & Return Values

```js
function add(a, b) {
  return a + b;
}

add(3, 4); // 7
```

- Parameters are placeholders
- Arguments are values passed during function call
- If no return is given → function returns `undefined`

---

## 🔹 Understanding Scope & Closures

### **Scope Types**

- **Global Scope** — accessible everywhere
- **Function Scope** — inside a function only
- **Block Scope** (`let`, `const`)

```js
function test() {
  let x = 10;
}
// x is not accessible here
```

### **Closure**

A closure allows a function to remember outer variables even after the outer function finishes.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

# Arrays in JavaScript

## 🔹 Creating & Manipulating Arrays

Arrays store ordered collections of values.

```js
let fruits = ["Apple", "Banana", "Cherry"];
```

### **push()** — Add to end

```js
fruits.push("Mango");
```

### **pop()** — Remove from end

```js
fruits.pop();
```

### **shift()** — Remove from start

```js
fruits.shift();
```

### **unshift()** — Add to start

```js
fruits.unshift("Orange");
```

---

## 🔹 Advanced Array Methods

Powerful methods for transforming and processing arrays.

### **forEach()** — Loop through elements

```js
fruits.forEach((item) => console.log(item));
```

### **map()** — Transform each element, return new array

```js
let lengths = fruits.map((f) => f.length);
```

### **filter()** — Keep elements that match a condition

```js
let longFruits = fruits.filter((f) => f.length > 5);
```

### **reduce()** — Accumulate values into a single output

```js
let total = [1, 2, 3, 4].reduce((sum, num) => sum + num, 0);
```

# String Manipulation in JavaScript

## 🔹 Common String Methods

Strings are immutable, but methods return new modified strings.

### **slice(start, end)**

Extracts a portion of a string.

```js
"JavaScript".slice(0, 4); // "Java"
```

### **substring(start, end)**

Similar to slice but doesn't accept negative indexes.

```js
"JavaScript".substring(4, 10); // "Script"
```

### **replace(search, replacement)**

Replaces first match.

```js
"Hello World".replace("World", "JS"); // "Hello JS"
```

### **split(separator)**

Splits string into array.

```js
"a,b,c".split(","); // ["a", "b", "c"]
```

### **toUpperCase()**

```js
"hello".toUpperCase(); // "HELLO"
```

### **toLowerCase()**

```js
"HELLO".toLowerCase(); // "hello"
```

---

## 🔹 Template Literals & String Interpolation

Use backticks for multi-line strings and embedding expressions.

```js
let name = "Ayush";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
```

Supports multi-line:

```js
let msg = `This is
multi-line
text.`;
```

# Object Manipulation in JavaScript

## 🔹 Creating Objects

Objects store key-value pairs.

```js
let user = {
  name: "Ayush",
  age: 25,
  city: "Delhi",
};
```

---

## 🔹 Accessing Properties

### Dot Notation

```js
user.name; // "Ayush"
```

### Bracket Notation

Useful when using dynamic keys.

```js
user["city"]; // "Delhi"
```

---

## 🔹 Adding Properties

```js
user.country = "India";
```

---

## 🔹 Modifying Properties

```js
user.age = 26;
```

---

## 🔹 Deleting Properties

```js
delete user.city;
```

---
