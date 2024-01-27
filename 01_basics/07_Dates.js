// Date object is used to get/evaluate time and dates
let myDate = new Date()

// Date is a type of object in JavaScript
console.log(myDate);

//Output: Sat Jan 27 2024 19:40:13 GMT+0530 (India Standard Time)
console.log(myDate.toString())

//Sat Jan 27 2024
console.log(myDate.toDateString())

//this method gives a string with
//Date in DD/MM/YY format and
//Time in hour:minutes:second fromat
console.log(myDate.toLocaleString())

//to create a custom date
//const params are in order 
//(Year, Month(0-JAN), Day, Hour, Minutes, Seconds)
let createdDate = new Date(2023, 0, 1)
// let createdDate = new Date("1-01-2023")
console.log(createdDate.toDateString())

//Time

//gives you the current time in miliseconds
const time = Date.now()
// console.log(time)

const date = new Date()
console.log(date.toLocaleString())
// to get hours, minutes, seconds
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


