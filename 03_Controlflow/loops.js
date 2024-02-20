// for 

 for (let index = 0; index < 10 ; index++) {
    const element = index;
    console.log(element);
    
}

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if(element == 6){
        console.log("6 is the best number");
    }
    console.log(element);
    
}

for (let i = 0; i < 10; i++) {
   // console.log(`Outer loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop:${j}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myarr = ["flash","batman","ironman"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[0];
    console.log(element);
    
}

// break and continue

for (let i = 0; i < 10; i++) {
   // console.log(` Value of i is ${i}`);
    if(i==5){
        console.log("Detected 5");
        break

    }
    console.log(`value of i is ${i}`);
    
} 

for (let i = 1; i <= 10; i++) {
    // console.log(` Value of i is ${i}`);
     if(i==5){
         console.log("Detected 5");
         continue
 
     }
     console.log(`value of i is ${i}`);
     
 } 

 // DO AND WHILE

let val = 0
while (val <=10) {
    console.log(`Value of val is ${val}`);
   val=  val + 2
    
}

let arr = ["batman","superman","flash"]
let index = 0
while(index < arr.length ){
    console.log(arr[index]);
    index = index + 1
}

let scor = 10
do {
    console.log(`score is ${scor}`)
    scor++
} while(scor <=10)
