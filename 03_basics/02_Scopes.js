{
    let a = 10; // this is a is not accessible outside the scope
    const b = 20;
    var c = 30;
    console.log(`Inner: ${a}`);
}

// console.log(a); // this will give error since a is declared as let in the above block scope 
// console.log(b); // this will give error since b is declared as const in the above block scope 
console.log(c); // c is in the global scope

function one() {
    const username = "Priyojit";
    function two() {
        const website = "youtube";
        // this will not throw error although <username> is not defined in the scope
        // so it will search in its lexical(parents's scope) scope, if its not there it will keep going out till global scope
        console.log(username);
    }
    // console.log(website); // this will throw error since <website> is not defined in the block scope of function one
    two();
}
one();