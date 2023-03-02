// Write a JavaScript program to calculate days left until next Christmas

const today = new Date();
const currentYear = today.getFullYear();
const christmasDate = new Date(currentYear, 11, 25); // 11 is December because months are zero-indexed in JavaScript
if (today.getMonth() === 11 && today.getDate() > 25) {
  // If it's past Christmas in the current year, calculate the Christmas date for next year instead
  christmasDate.setFullYear(currentYear + 1);
}

// Calculate the difference between the current date and Christmas date in milliseconds
const timeDiff = christmasDate.getTime() - today.getTime();

// Convert milliseconds to days and round down to the nearest integer
const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

console.log(`There are ${daysLeft} days left until Christmas!`);
