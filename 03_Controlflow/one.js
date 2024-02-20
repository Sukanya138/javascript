const temp = 40
if(temp === 50){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}
console.log("executed");

const score = 100
if (score < 200){
    let power = "fly"
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

const balance = 1000
if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if (balance < 1000){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


const isloggedin = true
const debitcard = true
if (isloggedin && debitcard){
    console.log("allow to buy course");
}

const loggedinfromemail = true
const loggedinfromgoogle = false
if(loggedinfromemail|| loggedinfromgoogle){
    console.log("allow to get in");
}

const month = 8
switch(month){
    case 1 : 
    console.log("january")
    break;
    case 2 : 
    console.log("february")
    break;
    case 3 : 
    console.log("march")
    break;
    case 4 : 
    console.log("april")
    break;
    case 5 : 
    console.log("may")
    break;
    case 6 : 
    console.log("june")
    break;
    case 7 : 
    console.log("jauly")
    break;
    default : 
    console.log("default case match")
    break;
}

const email = []
if(email){
    console.log("check email");
} else {
    console.log("no email");
}

if(email.length === 0){
    console.log("Array is empty");
}

const object = {}
if(Object.keys(object).length === 0){
    console.log("object is empty");
}

// NULLISH COALESCING OPERATOR (??)

let val1 = 10 ?? 14 ?? 12
let val2 = null ?? 200
let val3 = null ?? undefined
console.log(val1);
console.log(val2);


// TRNIARY OPERATOR 

let teaprice = 100
teaprice >100 ? console.log("it is cheap") : console.log("it is expensive");