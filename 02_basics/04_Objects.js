// when object is declared like this, its a singleton object
const tinderUser = new Object()

//adding some properties to it
tinderUser.id = "123abc"
tinderUser.name = "Alex"
tinderUser.isLoggedin = false
console.log(tinderUser)

//objects can be nested
const regularUser = {
    name: "Priyojit",
    fullname: {
        firstname: "Priyojit",
        lastname: "Singha"
    }
}

//how to access nested objects
console.log(regularUser.fullname.firstname)
console.log(regularUser.fullname?.lastname)

// how to combine objects
const obj1 = {
    key1: "key1"
}
const obj2 = {
    key2: "key2"
}

//this will rather create a nested object out of the objects
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) //we use this technique

//using spread operator
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// the Object.keys() returns the array of keys in a object
console.log(Object.keys(tinderUser))
// the Object.values() returns the array of values in a object
console.log(Object.values(tinderUser))
// .hasOwnProperty() tells us wether the object has this property or not
console.log(tinderUser.hasOwnProperty('isLogged'))





