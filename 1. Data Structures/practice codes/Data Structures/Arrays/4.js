// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor


function nITem(array, n) {
    // If n is not provided or is greater than the length of the array, return the last element
    console.log("=========");
    console.log(Math.max(array.length-n));
    console.log(array.length);
    console.log(n);
    console.log("=========");
    if (n == null || n >= array.length) {
      return array[array.length - 1];
    }
    // Otherwise, return the last n elements
    return array.slice(Math.max(array.length - n, 0));
    
  }

console.log("------ new --------")
console.log(nITem([7, 9, 0, -2])); // 7
console.log(nITem([],3)); // []
console.log(nITem([7, 9, 0, -2],3)); // [7, 9, 0]
console.log(nITem([4, 4, 1, -5],6)); // [7, 9, 0, -2]
console.log(nITem([6, 5, 2, -6],-3)); // []
