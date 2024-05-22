const userLoggedin = true;
const temp = 41;

//if-else
if (temp < 50) {
  console.log("less than 50");
} else {
  console.log("more than 50");
}

const score = 200;

// if
if (score > 100) {
  console.log(`User power: ${score}`);
}

const balance = 1000;

//implicit scope
if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 900");
}

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedin && debitCard) {
  console.log("Allow to buy");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("user logged in");
}

//switch case
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}

// Truthy and falsy values

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
