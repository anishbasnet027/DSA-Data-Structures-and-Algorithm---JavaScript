// Write a JavaScript program to display the current day and time in the following format.  Go to the editor



const now = new Date();
console.log(now); // getting local time
const day = now.toLocaleDateString();  // getting local time to string
const time = now.toLocaleTimeString();
console.log("Today is "+day)
console.log(time)


