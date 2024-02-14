const accountID = "12393"
let accountEmail = "suk@g.com"
var accountPassword = "1234"
var accountCity ="Jaipur"
let accountState;

// perfer not to use var instead use let to prevent issue in block scope nad function scope

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

accountEmail = "hdc@g.com"
accountState ="banaras"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);


