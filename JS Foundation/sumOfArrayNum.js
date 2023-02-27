function sumArray(a){
    a.reduce(function(a,b){
        return a+b;
    })
}

sumArray([1,2,3])
