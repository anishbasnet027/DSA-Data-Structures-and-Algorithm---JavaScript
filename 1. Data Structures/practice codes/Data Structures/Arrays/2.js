// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

A1=[1,2,3];
A2=[];

console.log(cloneArray(A1));

//using tradition loops
function cloneArray(inputArray){
    for (let i=0; i<inputArray.length; i++){
        A2[i]=A1[i];
    }
   return A2;

}

// Shallow Copy , Spread Operator
console.log(cloneArray1(A1));

function cloneArray1(inputArray){
    let A3 = [...inputArray];
    return A3;
}
