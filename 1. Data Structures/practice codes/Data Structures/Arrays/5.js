// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function dashSeperation(f) {
    let a = [];
    for (let i=0; i<f.length; i++){
        a.push(f[i]);
        if (f[i]%2===0 && f[i]%2===0){
            a.push('-');
        }

    }
    return  a.join('');

}

console.log(dashSeperation([1,2,4,5,6,8,9]));
