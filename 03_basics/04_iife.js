// Immediately Invoked Function Expression (IIFE)

function fun() {
    console.log(`connected to db`);
}
fun();

(function iife() {
    //named IIFE
    console.log(`connected to db`);
})();

((name) => {
    console.log(`hello ${name}`);
})('priyojit');
