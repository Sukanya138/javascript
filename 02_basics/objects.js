
const mysym = Symbol("key1")
const user = {
    name : "sukanya",
    age : 21,
    "full name":"sukanya orewale",
    [mysym]:"key1",
    location :"karnataka",
    email: "suk@g.com"
}


console.log(user.email); // one way to acces objects

console.log(user["full name"]);
console.log(user[mysym]);

user.email = "sukanyaorewale"
console.log(user);
 Object.freeze(user)
user.email = "sonia@g.com"
console.log(user);

user.greetings = function(){
    console.log("hello world");
}

user.greeting2 = function(){
    console.log(`HI JS User ${this["full name"]}`);

}

console.log(user.greetings());
console.log(user.greeting2());