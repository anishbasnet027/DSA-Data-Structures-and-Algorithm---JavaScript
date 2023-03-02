function rotateLeft(d, arr) {
    // Write your code here
    let temp;
    for (let a=0; a<d;a++){
        temp=arr[arr.length-1];
        arr.pop();
        arr.unshift(temp);
    }
    return arr;
}

console.log(rotateLeft(2,[1,2,3,4,5]));