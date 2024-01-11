const accountId = 144553 //cannot be changed
let accountEmail = "priyojit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

accountEmail = "abc@fss.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

