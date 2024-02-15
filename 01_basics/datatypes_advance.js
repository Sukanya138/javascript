 /*const id = Symbol('1234')
const anotherId= Symbol('1234')
console.log(id === anotherId) */

 /*let value="sukanya"
console.log(typeof value)

let val=1234567890987654321n
console.log(typeof val)

let val2=Symbol('1234')
console.log(typeof val2)

const heros =["ironman","doga","CAP"]
console.log(heros)

const myobj = { name : "sukanya",age :21,gender : "female"}
console.log(typeof myobj);

const myfunc = function(){
    console.log("hello world");
}
console.log(myfunc) */


// MEMORY
  
let name="sukanya"            // stack makes a copy of it so it replaces the copy with the new one 
let anothername = name
anothername = "soniaa" 

console.log(anothername)

let user1 = {                // heap has one reference only
    email : "suk@g.com",
    upi : 1234

}
let user2 = user1
user2.email= "sonia@g.com"
user2.upi = 9876
console.log(user1)
console.log(user2)
