 // Number
 
 const score = 400
console.log(score)

const balance = new Number (500)
console.log(balance);

console.log(balance.toString().length)
console.log(typeof balance)

const bal = 12349.957987
console.log(bal.toFixed(2));
console.log(bal.toPrecision(8));

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))  

// MATHS //     



console.log(Math)
console.log(Math.abs(-98));

console.log(Math.round(234.287))

console.log(Math.ceil(23.06))

console.log(Math.floor(456.98))

console.log(Math.min(4,5,1,3,8));
console.log(Math.max(9,4,6,10));
console.log(Math.sign(10));

console.log((Math.random()*10) +1)

const min = 20
const max = 30
console.log(Math.floor(Math.random() *(max - min +1)+ min))
