// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


// my version
function returnNItem(a,b){
    var c = [];
  var i = 0;
  do {
    c.push(a[i]);
    i++;
  } while (i < b && i < a.length);
  return c;
}

console.log(returnNItem([1, 23], 0)); // []
console.log(returnNItem([1, 23], 1)); // [1]
console.log(returnNItem([1, 23], 2)); // [1, 23]
console.log(returnNItem([1, 23], 3));

//short version

function nITem(a,b=1){
    if (b<0){
        return [];
    }
    return a.slice(0,b);
}
console.log("------ new --------")
console.log(nITem([7, 9, 0, -2])); // 7
console.log(nITem([],3)); // []
console.log(nITem([7, 9, 0, -2],3)); // [7, 9, 0]
console.log(nITem([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(nITem([7, 9, 0, -2],-3)); // []
