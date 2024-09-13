const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// for-of loop
for (const num of arr) {
    console.log(num)
}

const msg = 'Hello World'

for (const char of msg) {
    console.log(char);

}

// Maps - The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()

map.set('IN', 'India')
map.set('US', 'United States of america')
map.set('FR', 'France')
// map.set('IN','India') // maps dont store duplicate entries

console.log(map)

// using for-of loop it will print values like [key,value]
for (const key of map) {
    console.log(key)
}


// you can separate them by array destructuring
for (const [key, value] of map) {
    console.log(key, value)
}

// for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for object you need to use for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// note - in array if you use for-in loop you will get the index as keys

// forEach loop

const myArr = [1, 2, 3, 4, 5, 6]

myArr.forEach((val,index,arr)=>{
    console.log(`value- ${val} is at index- ${index} in array- ${arr}`);
})