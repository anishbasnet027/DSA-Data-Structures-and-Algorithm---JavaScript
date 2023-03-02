//check number of repeatation in array

function checkReaptation( input,standard){
    let valueArray=[];
    for(let i=0; i<standard.length; i++){
        let temp = 0; // Initialize temp to 0 before each inner loop
        for (let j=0; j<input.length; j++){
            if(input[j] === standard[i]){
                temp++;
            }
        }
        valueArray.push(temp);
    }
    return valueArray;
}

console.log(checkReaptation(["abc", "abc", "xyz", "efg"], ["abc", "xyz", "xyz"]));
