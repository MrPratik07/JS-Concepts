const { resolve } = require("path");

const a = () => {
    return "I m in a";
}

// using setTimeout method will help the program to run the rest of the code 
// const b = () => {
//     setTimeout(()=>{
//         console.log("Display after few seconds");
//     },3000);
//     console.log("I m in b");
// }


// its good that when we use a setTimeout method rest all code will run but if we want to put a condition where after few seconds 
// the code should be run. here comes the promises, async, await   
const b = () => {
    
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("I am in b");
        },3000);
    })
}


const c = () => {
    return"I m in c";
}


const callme = async() =>{
    const afun = a();
    console.log(afun);

    const bfun = await b();
    console.log(bfun);

    const cfun=c();
    console.log(cfun);
}

//callme();




// write a promise to get number 3

function returnNumber3(n){
    return new Promise((resolve,reject)=>{
        if(n!=3){
            reject("Number is not three")
        }
        resolve(3);
    })
}

function printx(x){
    console.log("It is",x);
}

const getNumber= async()=> {
    const x= await returnNumber3(2); 

    const y=await printx(x);
}

getNumber();