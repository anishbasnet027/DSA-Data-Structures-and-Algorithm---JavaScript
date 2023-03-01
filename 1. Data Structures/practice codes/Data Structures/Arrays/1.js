// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


//my  solution
function checkArray(arrayInp){
    if(typeof arrayInp == "object"){
        return true;
    }
    else {
        return false;
    }
}

//easy solution
function checkArray(arrayInp){
   return Array.isArray(arrayInp);
}


console.log(checkArray([1, 2, 4, 0]));
console.log(checkArray([1, 2, 4, 0]));
console.log(checkArray(1));
console.log(checkArray('w3resource'));
console.log(checkArray([1, 2, 4, 0]));


