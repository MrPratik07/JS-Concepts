

// Spread Operator converts array into individual values

function sumOne(a,b){
    return a+b;
}
var myArray=[5,4];
console.log(sumOne(...myArray));

var Student = {
    x:1,
    y:2,
    z:3
}

var s= {...Student};
console.log(s);


// REST OPERATOR coverts individual values into an Array
function sumTwo(...args){
    let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(sumTwo(1,2,3,4,4))


function sumThree(a,b,...args){
    let sum=0;
    let multi=a*b;
    for (const arg of args) {
        sum+=arg;
    }
    return [sum,multi];
}

console.log(sumThree(1,2,3,4,4))