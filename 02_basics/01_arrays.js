//Arrays
const arr = [0, 1, 2, 3, 4, 5]
console.log(arr)

// Array methods

//to insert element at end
arr.push(0)
console.log(arr)

//to delete element from the end
arr.pop()
console.log(arr)

//to insert element at the start
arr.unshift(0)
console.log(arr)

//to delete element from the start
arr.shift()
console.log(arr)

// check if element is present or not
console.log(arr.includes(0))

// to find the index of a particular element (return -1 if not in array)
console.log(arr.indexOf(1))

// join() -  joins all the elements of an array and returns it as string
const newArr = arr.join()
console.log(newArr)

// split() -  splits the string into parts, separated by <given arg> and puts each into into a new array and returns it
const secArr = newArr.split(',')
console.log(secArr)

// to return a sub-section/part from the array use silce(start,end), original array not modified
const part = arr.slice(1, 3)
console.log(`Original array: ${arr} and part sliced: ${part}`)

// when you use splice() it does the same but orignal array is modified
const part2 = arr.splice(1, 3)
console.log(`Original array: ${arr} and part sliced: ${part2}`)