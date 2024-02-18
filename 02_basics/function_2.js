function calculateprice(num1){
    return num1
}
console.log(calculateprice(2));

function calculateprice1(...num1){
    return num1
}
console.log(calculateprice1(200,300,400,600));

function calculateprice2(val1,val2,...num1){
    return num1
}
console.log(calculateprice2(200,300,400,600,800,"suk"));

const user = {
    username : "sukanya",
    age : 21,
    price : 1999
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and her age is ${21}`);
}
handleobject(user)

function handle(obj = {
    username1 : "suk",
    age1 : 21,
}) {
    console.log(`Username is ${obj.username1} and her age is ${obj.age1}`);
}
handle()


const array = [200,300,400,500,800]
function returnvalue (getarray){

    return getarray[2]
}
console.log(returnvalue(array));

console.log(returnvalue([200,300,400,500,800]));



