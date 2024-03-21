// Functions are basically a block of code that can be reused
// how to create a function, we use function keyword
function hello() {
    console.log("Hello, World!")
}

//this is function reference
hello
//this is how we call/execute the function
hello()

// you can pass values to a function, for that you need to define function parameters
function addTwo(number1, number2) {
    // the return keyword is used to return something from the function
    return number1 + number2
}

// when you call the function, the values you pass is known as arguments
// if the function returns something that can be stored in a variable
const ans = addTwo(2, 3)
console.log(ans);

// when you dont know how many values users are going to pass, then you can use ... <--(spread/rest) operator
function addAll(...args) {
    let sum = 0;
    args.forEach(num => {
        sum += num;
    })
    console.log(sum);
}
addAll(1, 2, 3, 4, 5, 6);

// working with objects passed to functions
const myObj = {
    'username': 'Priyojit Singha',
    'age': 22
};
function objectFun({ username, age }) {
    if (username)// if username is not null or undefined
        console.log(`username is ${username}`);
    if (age)// if age is not null or undefined
        console.log(`age is ${age}`);
}
objectFun(myObj);

