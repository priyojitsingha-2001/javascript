const arr = [1, 2, 3, 4, 5]
const secArr = [6, 7, 8]

// how to join two arrays

//using spread operator, this spreads the array into each element and adds them to the array
const spreadArr = [...arr, ...secArr]
console.log(`using spread operator: ${spreadArr}`)

// using concat method, returns a new array
const concatedArr = arr.concat(secArr)
console.log(`using concat: ${concatedArr}`)

// you have a scenario where your array is like this
const array = [1, 2, [3, 4], 5, [6, [7, 8]]]

// now to get all the array elements in one do this
const newArray = array.flat(Infinity)
console.log(newArray)

// to check if a value is array or not, use Array.isArray(). return in boolean
console.log(Array.isArray("javascript"))

// now if you got a value like that or any other string convert it to array like this
const toArray = Array.from("javascript")
console.log(toArray)

// create a array from a set of values, using  Array.of()
let a = 10
let b = 20
let c = 30
const abc = Array.of(a, b, c)
console.log(abc)
