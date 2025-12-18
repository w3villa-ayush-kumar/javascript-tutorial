
// 1. Create an object with a method that logs this.

const user = {
    name: "Ayush",
    getName: function () {
        console.log("Object", this);
    }
};

user.getName();


// 2. Compare this in regular and arrow functions.

const compareThis = {
    name: "Comparison",

    regFunc: function () {
        console.log("Regular function this:", this);
    },

    arrowFunc: () => {
        console.log("Arrow function this:", this);
    }
};

compareThis.regFunc();
compareThis.arrowFunc();

// 3. Log this inside a global function vs object method.

function globalFunc() {
    console.log("Global function:", this);
}
const obj = {
    value: 42,
    method() {
        console.log("Object method:", this);
    }
};

globalFunc();
obj.method();