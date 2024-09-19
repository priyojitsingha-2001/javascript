// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

// Example of creating a promise that resolves after 3 seconds
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async complete');
        resolve(); // Resolve the promise once the async operation is complete
    }, 3000);
});

// Consuming the promise using .then
promiseOne.then(() => {
    console.log('Promise consumed');
});

// A promise with a success or failure outcome (resolve or reject)
// On success, we call resolve; on failure, we call reject, passing data in both cases
const promiseTwo = new Promise(function (resolve, reject) {
    let flag = true; // Simulating a condition that decides success or failure
    setTimeout(function () {
        if(flag){
            resolve('Successful'); // Resolve the promise with success message
        }
        else{
            reject('ERROR: unsuccessful'); // Reject the promise with an error message
        }
    }, 3000);
});

// Consuming the promise with .then for success and .catch for errors
promiseTwo
.then((data) => {
    console.log(data); // Log the success message from resolve
})
.catch((error) => {
    console.log(error); // Log the error message from reject
});

// Fetching data from an API using async/await
// The 'async' keyword makes this function asynchronous
async function getAllUsers() {
    // Use try-catch to handle errors when working with async/await
    try {
        // 'await' pauses the function until the promise is resolved
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json(); // Convert response to JSON format
        console.log(data);        
    } catch (error) {
        // Catch and log any errors that occur during the fetch
        console.log(`ERROR: ${error}`);    
    }
}

getAllUsers();

// The same fetch operation using traditional .then and .catch syntax
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then((response) => {
    // The .json() method returns a promise, so we need another .then to handle it
    return response.json(); 
})
.then((data) => {
    console.log(data);    
})
.catch((error) => {
    // Log any errors that occur during the fetch operation
    console.log(`ERROR: ${error}`);   
});
