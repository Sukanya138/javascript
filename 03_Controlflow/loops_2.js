 /*// FOR OF LOOP
 
 const arr = [1,2,3,4,5]
 for (const num of arr) {
    console.log(num);
    
 }

 const val = "Hello World"
 for (const i of val) {
    console.log(i);
    
 }
 

 const map=new Map()
 map.set('IN',"India")
 map.set('USA',"United States of America")
 map.set('fr',"FRance")

 console.log(map);

 for( const [i,value] of map){
   console.log(i,':-',value);
 }

 // FOR IN LOOP


 const obj = {
   js : "Javascript",
   rb : "Ruby",
   py : "Python",
   cpp : "C++"

 }
 for (const key in obj) {
   console.log(`${key} is shortcut for ${obj[key]}`);
      
   }
 const arr1 = ["js","rb","cpp","py"]
 for (const key in arr1) {
   console.log(arr1[key]);
 } 

 // FOR EACH LOOP

 const coding = ["js","cpp","rb","py"]

 coding.forEach(function (item){
  console.log(item);
 })

 coding.forEach( (item) => {
  console.log(item);
 })

 function printme(item) {
  console.log(item);
  
 }
 coding.forEach(printme)

 coding.forEach( (item,index,arr)=> {
  console.log(item,index,arr);
 })

 const cod = [
   {
      langname : "python",
      langfile : "py",
    },
      
    {
      langname : "javascript",
      langfile : "js",
    },
    {
      langname : "C++",
      langfile : "C++",
    },
 ]
 cod.forEach((item)=> {
  console.log(item.langname);
 }) */
 
 const coding = ["js","cpp","rb","py"]

 const values = coding.forEach((item) => {
  console.log(item);
 })

 console.log(values); // coz for loop doesnot return values