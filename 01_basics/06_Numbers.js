const score = 400
console.log(score);

//this is how you can explicitly define a number using Number Object
const balance = new Number(100)
console.log(balance);

// you can convert the number to string
console.log(typeof balance.toString())

//this method will give you the value in two deciaml places
//the type is converted to string
console.log(balance.toFixed(2))

const num = 24.666
// this will give the value precisely for the first n digit
console.log(num.toPrecision(3))

const amount = 10000
//this will convert the amount to Indian standards or other country standard
console.log(amount.toLocaleString('en-IN'));

// to get the maximum and minimum value
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Math object comes with lots of properties and methods for math constants and operations
console.log(Math);

//to get the absolute value
console.log(Math.abs(-4))

//to round of a number
console.log(Math.round(89.56));

// to round of to its nearest lower integer
console.log(Math.floor(8.3));

// to round of to its nearest higher integer
console.log(Math.ceil(8.3));

//to get the max and min value
console.log(Math.max(4, 1, 8, 5))
console.log(Math.min(4, 1, 9, 5))

//to get random numbers (0-1)
console.log(Math.random())

//to get random numbers in a range
const start = 10
const end = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


