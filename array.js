

var arr= [2,4,6,8,10];

console.log(arr);

arr.push(6);
console.log(arr);

arr.unshift(0);

console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);


//console.log(arr.fill(1,0,4));

const resultFilter=arr.filter((e) => e%2===0);

console.log(resultFilter);

//console.log(arr.slice(0,4))

var x=["P","R","A","T","I","K"]

//const resultSplice=x.splice(0,6,"H");

//console.log(resultSplice);


const resultMap=arr.map((e)=>(e*10));
console.log(resultMap)



console.log(arr.every((e)=>(e%2===0)))


arr.forEach((element)=> console.log(element));


for(i of arr){
    console.log(i);
}