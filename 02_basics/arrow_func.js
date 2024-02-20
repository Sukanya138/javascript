const user = {
    username :"sukanya",
    price : 999,
    welcomemessage : function (){ 
        console.log(`${this.username} welcome to website`);
       // console.log(this);
    }
}

user.welcomemessage()
user.username="sonia"
user.welcomemessage()
console.log(this);
console.log(user);

function you (){
    const score = 200
    console.log(this.score);
}
you() 

const chai= function(){
    username : "sukanya"
    console.log(this.username);
}
chai()
const one = () => {
    let username = "sukanya"
    console.log(this);
}
one()

const addtwo = (num1,num2) => {
    return num1 + num2 
}
console.log(addtwo(3,5))

const add = (num1,num2) => (num1 + num2)
console.log(add(2,3)); 

const add1 = (num1,num2) => ({ username :"sukanya",price : 999})
console.log(add1()); 