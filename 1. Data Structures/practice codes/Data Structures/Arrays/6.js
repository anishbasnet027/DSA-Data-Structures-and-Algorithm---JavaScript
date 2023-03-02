// Reverse the int in array
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  console.log(reverseArray([1,2,3])); // Output: [3, 2, 1]

function reverseArray(arr){
    return arr.reverse();
}