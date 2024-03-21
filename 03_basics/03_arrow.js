// this keyword refers to the current context
const user = {
    username: "priyojit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},Welcome to webiste`);
    }
};
user.welcomeMessage();
// if we chagne the value of any properties of the object
// since this will refer to the current context, the change will reflect in our output
user.username = "babai";
user.welcomeMessage();

// this refers to an empty object in node environment
// because we dont have any gllobal window object, like browser environment
// but we have a globalThis in both the places
console.log(this);

// inside a function this refers to globalThis, but canot be used to refer to values inside function scope
function fun() {
    let name = "js";
    console.log(this);
    console.log(this.name);// returns undefined
}
fun();

//but inside an arrow function this refers to an empty object
const arrow = () => {
    console.log(this);
}
arrow();

// if an arrow function has one statement you can skip the curly braces
const aro = (a, b) => console.log(a + b);
aro(1, 2);

// implicit return - if that only statement is a return statement, you can skip the return 
const arow = (a, b) => a + b;
// can also be --> const arow = (a, b) => (a + b);
console.log(arow(1, 2));






