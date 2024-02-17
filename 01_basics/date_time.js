// Dates

/*let date = new Date()
console.log(date.toDateString());

console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toJSON());

const dates = new Date(2021,5,25)
console.log(dates.toDateString());

const date1 = new Date("2021-06-25")
console.log(date1.toDateString());

const date2 = new Date("01-14-2023")
console.log(date2.toDateString()); */

// Timestamp

let myTime = Date.now()
console.log(myTime)
console.log(Math.floor(Date.now()/1000))

let dat = new Date(2024,2,17)
console.log(dat.getMonth()+1);
console.log(dat.getDay());

console.log(`Today is ${dat.toString()} and the time is ${myTime}`)

const dats = new Date()
console.log(dats.toLocaleString('default',{
    dateStyle : "short",
    }));

const dat1 = new Date()
console.log(dat1.toLocaleString('default',{
    year : "numeric",
    minute : "2-digit"
    }));
