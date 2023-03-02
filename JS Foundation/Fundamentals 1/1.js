// JavaScript: Compare two objects to determine if the first one contains equivalent property values to the second one

function CheckValues(obj1, obj2) {
    let key1 = Object.keys(obj1);
    for (let i = 0; i < key1.length; i++) {
      if (obj1[key1[i]] != obj2[key1[i]]) {
        return false;
      }
    }
    return true;
  }
  
  let obj1 = { name: 'Ram', age: 30, city: 'Ktm' };
  let obj2 = { name: 'John', age: 30, city: 'New York' };
  
  console.log(CheckValues(obj1, obj2)); // Output: false
  