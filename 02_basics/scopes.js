function one(){
    const username = "sukanya"
   function two(){
    const website = "youtube"
    console.log(username);
   }
   // console.log(website);
   two()
}

one()

if(true){
    const name = "sukanya"
    if(name == "sukanya"){
        const age = 21
        console.log(name + age);
    }
    console.log(age);
} 


console.log(addone(4))
function addone(num){
    return num +1
}

const addtwo = function(num){ // this cannot print addtwo before initialization coz we have stored it in a variable
    return num+1
}
console.log(addtwo(7))

