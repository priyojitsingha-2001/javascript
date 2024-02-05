// singleton
// Object.create

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Priyojit",
    "full name": "Priyojit Singha",
    [mySym]: "mykey1", // this is how you use symbol as a key to be parsed as symbol and not a string
    age: 24,
    email: "priyojit@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Friday"]
}

// how to access object properties
// console.log(jsUser."full name") //not allowed
console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser[mySym]) //printing the symbol key value

//how to change the value of a key
jsUser["email"] = "priyojit@microsoft.com"
console.log(jsUser["email"])

//to prevent a object from being modified you can use Object.freeze()
// Object.freeze(jsUser) //uncomment to use
jsUser["email"] = "priyojit@facebook.com"
console.log(jsUser["email"])

// how to add new key-value
jsUser["greeting"] = function () {
    console.log("Hello Js User")
}
jsUser["greeting"]()
