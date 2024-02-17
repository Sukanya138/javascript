const tinderuser = {
    name: "sonia",
    id: "123sbd",
    isloggedin : "false"
}
console.log(tinderuser);
console.log(tinderuser.name);

const regularuser = {
    email :"suk@g.com",
     userfullname :{
        username : {
        firstname :"sukanya",
        lastname : "orewale",
         } 
        }
}

console.log(regularuser.userfullname.username.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = {obj1,obj2,obj3}
const obj4 =Object.assign({},obj1,obj2,obj3)
 console.log(obj4);

 const obj5 ={...obj1,...obj2,...obj3}
 console.log(obj5);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("isloggedin"));