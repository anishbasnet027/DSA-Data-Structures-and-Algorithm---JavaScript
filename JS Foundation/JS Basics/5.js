// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  

for (let year = 2014; year <= 2050; year++) {
    const date = new Date(`${year}-01-01`);
    if (date.getDay() === 0) {
      console.log(year);
    }
  }
