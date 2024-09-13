const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter
const arrFilt = num.filter((item) => {
    return item < 6 // explicit return
}) // filter function returns a new array based on the logic of the callback function

console.log(arrFilt);

// another example of filter function
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History') // implicit return

userBooks = books.filter((bk) => {
    return bk.publish >= 2000
})

console.log(userBooks);

// map function

// this function is used to iterate over an existing array, it returns a new array after doing some modifications to it based on the callback function

const arrMap = num.map((item, index) => {
    // here I am adding the index values to each item and returning a new array
    return item + index
})

console.log(arrMap)

// Reduce function - This method is also used to iterate over an array but its a bit different. It takes a callback function which has two parameters an accumulator(the first param) and a currentValue(second param). The currentValue is the current value while iterating through the array and the accumulator is the value that is the result returned by this reduce function. Lets take the example below and understand. Here I am calculating the sum of all the elements of the array.So every single time the currentValue is getting added to the total (accumulator), which starts as the first array element by default or an initial value if provided as the second argument after the callback, and in the end, the total value is returned

const arr = [1, 2, 3, 4]
const arrRedu = arr.reduce((total, item) => (total + item),0)

console.log(arrRedu)

// another example of reduce function

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay=shoppingCart.reduce((total,item)=>(total+item.price),0)
console.log(`You need to pay ${priceTopay}`)
