const name = "priyojit"
const repoCount = 27

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priyojitsingha-2001')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   priyojit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nerdbash.hash%20node.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('hash-node'))

console.log(gameName.split('-'));