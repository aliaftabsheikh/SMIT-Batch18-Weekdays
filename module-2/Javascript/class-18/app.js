var date = new Date()

// console.log("Current date and time is: " + date.getDay())

// console.log(date.getTime())


// Monday
// Mon

// Peer

// var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// var shortWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// var urduWeekDays = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"]
// // console.log(date.getDay())

// console.log("Today is: " + urduWeekDays[date.getDay()])

// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ]

// var shortMonthNames = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ]

// console.log(shortMonthNames[date.getMonth()])

// console.log("Get full year",date.getFullYear())
// console.log("Get hours",date.getHours())
// console.log("Get minutes",date.getMinutes())
// console.log("Get seconds",date.getSeconds())
// console.log("Get milliseconds",date.getMilliseconds())

// var today = new Date();
// var doomsday = new Date("June 30, 2030 00:00:00");


// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();

// var msDiff = msDoomsday - msToday;

// var monthsDiff = msDiff / (1000 * 60 * 60 * 24 * 30.44)

// var daysDiff = msDiff / (1000 * 60 * 60 * 24)

// console.log("Days remaining until June 30, 2030: " + Math.floor(daysDiff));


// console.log("Months remaining until June 30, 2030: " + Math.floor(monthsDiff));



var date = new Date();
var now = new Date();

date.setDate(15);
date.setMonth(11); // December (0-indexed)
date.setFullYear(2025);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);

console.log("Current Date and Time: " + date.toString());


console.log(date.getTime())
console.log(now.getTime());


var diff = now.getTime() - date.getTime();

console.log("Difference in milliseconds: " + diff);