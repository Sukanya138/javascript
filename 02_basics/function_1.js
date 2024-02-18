function myfn (){
    console.log("S");
    console.log("U");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");

}
myfn()

function add(n1,n2){
    console.log(n1 + n2);

}
add(3 ,10)
add(3,null)
add(3, "a")

const result = add(3,5)
console.log("Result",result);

function add2(n1,n2){
   // let result2 = n1 + n2
    return  n1 + n2

}
const result2 =add2(3,5)
console.log("Rseult",result2); 

function loginuser (username){
    return `${username} just logged in `
}
 console.log(loginuser("sukanya"));
console.log(loginuser());

function user(username){
    if(username==undefined){
        console.log("please enter a username");
        return 
    }
    return  `${username} just logged in `
}
console.log(user("sukanya")); 

function user1(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return  `${username} just logged in `
}
console.log(user1());
