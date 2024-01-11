// Primitive

// 7 types: String, Number, Boolean, Null, BigInt, Undefined, Symbol
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron man", "Captain America", "Thor"];
let myObj = {
    name: "priyojit",
    age: 23,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);