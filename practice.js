// var x= true;
// if(x===true){
//     var y=10
// }

// console.log(y)


// var m="pratik";

// let d=m.length;

// console.log(d);

//closure
function Multiply (input){
    let  y=input
    return function(x){
      return x*y*10;
    }
}

const m=Multiply(10);
console.log(m(10))


// ternery operator
// var userLoggedIn=true;

// var a=userLoggedIn ? "please log out" : "please log in";

// console.log(a);


//switch case
var user="admin";

switch (user) {
    case "testprep":
        console.log("its a testprep")
        break;
    case "admin":
        console.log("its a admin");
        break;
    default:
        console.log("nothing");
        break;
}

// functions

const getTheRole = (name, task) => {
    switch (name) {
        case "admin":
            console.log(`The Task is ${task}`)
            break;
        case "testprep":
            console.log(`The Task is ${task}`);
        default:
            console.log(`No Task`);
            break;
    }
}

getTheRole("admin","check the stuff");


// hoisting


console.log(a);
var a=11;


// sayHello();
// var sayHello=  () =>{
//     console.log("Hello world");
// }

sayHello();

function sayHello(){
    console.log("Hello WOrld 1")
}

// scope chain or scoping
var x=10;
function changeValue(){
    x=11;
    console.log(x);
}
changeValue();
console.log(x);



console.log(typeof this)




