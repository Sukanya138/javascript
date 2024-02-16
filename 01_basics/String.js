/*let name = "sukanya"
let age = 50
console.log(name + age + "Value")  // do not prefer this method although this is correct it is old method 

// One More way is 

console.log(`My name is ${name} and my age is ${age}`);

// one more way to declare string is

const gameName = new String("sukanya")

console.log(gameName[1])

console.log(gameName.toUpperCase())

// to check the character of that index

console.log(gameName.charAt(3))
console.log(gameName.indexOf('y')) */

const gameName = "sukanya"
const string=gameName.substring(0,3)
console.log(string)

const newstring=gameName.slice(-7,3)
console.log(newstring)

const stringone = "   sukanya   "
console.log(stringone);
console.log(stringone.trim())

const url = "https://suk.com/suk%20orewale"
console.log(url.replace('%20','-'));
console.log(url.includes('suk'))



const names = "sukanya %5ore%5wale"
console.log(names.split('%5'))