//  typical javascriptt object
const user = {
    username:'priyojit',
    loginCount:8,
    signedInd:true,
    getUserDetails:function(){
        console.log(`username is ${this.username}`);        
    }
}
user.getUserDetails()
// console.log(global);

// this keyword and Constructor function example 
function User(username,loginCount,isLoggedIn){
    this.username=username // this keyword refers to the current context of this function, resolves name conflict
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this; // even if we dont return, Its explicitly returned: try commenting this line
}

// new keyword creates a new context so both the objects have different values 
const userOne = new User('priyojit123',8,true)
const userTwo = new User('priyojitsingha',4,true)

console.log(userOne,userTwo);

// but if we dont use the new keyword you will see that since the values were bind with the global object; its gets overriden every single time
// const userOne = User('priyojit123',8,true)
// const userTwo = User('priyojitsingha',4,true)

// console.log(userOne,userTwo); // in this case while you are not using the new keyword the function is invoked as a regular function and since its not returning any value so we get undefined: make sure to add return in this case


// NOTE: NEW KEYWORD
// step 1 - when we use a new keyword to invoke a function: its refered to as a constructor function and a new empty objet is created
// step 2 - If you take a close look at the function we are using this keyword to differentiate between the variable names, by that we are also binding the values to the empty object
// step 3 - and then finally we get the value; if we dont use the return keyword, its implicitly returned

console.log(userOne instanceof User) // using this keyword we can check if the object is an instnace of the class or not