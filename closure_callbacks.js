
// closure
function Multiplier_by_10(element){
    let x=element;
    return (value) => value*x;
}

const y=Multiplier_by_10(10)
console.log(y(10));

// one more method
//const y=Multiplier_by_10(10)(10);
//console.log(y);


// call backs

function display(sum){
    console.log(sum);
}

function sumOfTwo(num1,num2,callbacks){
    var sum=num1+num2;
    callbacks(sum);
}

sumOfTwo(2,5,display);

