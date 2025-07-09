// dates

// let myDate = new Date()
// let formattedDate = myDate.toDateString()
// let formattedDate2 = myDate.toLocaleString()
// console.log(myDate.toString());
// console.log(formattedDate);
// console.log(formattedDate2);

// let myCreatedDate = new Dtae(2023, 0, 23)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// "${newDate.getDay()} and the time"

newDate.toLocaleString('default',{
    weekday: "long",
})
