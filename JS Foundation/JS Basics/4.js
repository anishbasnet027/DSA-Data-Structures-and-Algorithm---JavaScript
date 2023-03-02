// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function leapYear(year){
    if(year%2===0) return true;
    return false;
}

console.log(leapYear(1990));
console.log(leapYear(1993));