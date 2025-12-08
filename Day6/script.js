// 1. Wrap a JSON.parse() call inside try...catch.

let user = "{name:'Ayush'}";

try {
    let data = JSON.parse(user);
    console.log("Data:", data);
} catch (error) {
    console.log("Error: ", error.message);
}

// 2. Create a function that throws an error if input is not a number.

function checkNumber(num) {
    if (typeof num !== "number") {
        throw new Error("Expected a number");
    }
    return true;
}

try {
    checkNumber("20");
    console.log("Valid number");
} catch (error) {
    console.log("Error:", error.message);
}

// 3. Log an error message gracefully in a catch block.

try {
    abcd();
} catch (error) {
    console.log("Error:", error.message);
}

// 4. Add a button that shows an alert when clicked.

btn.onclick = function () {
    alert("You clicked me!")
}

// 5. Add a form that prevents submission and logs a message.

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submission prevented");
});

// 6. Use event delegation on a list of items to show which item was clicked.

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("You clicked:", event.target.innerHTML);
    }
});
