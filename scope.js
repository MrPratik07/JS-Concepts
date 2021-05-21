var x=10;

function sayHello(){
    var x=20;
    console.log(x);
}
console.log(x);
sayHello();
console.log(x);

// Var is FUNCTION SCOPIC and not BLOCK SCOPIC 

//let y=10;
if(true){
   var y=20;
}
//console.log(y);



