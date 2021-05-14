
var ourMap=new Map();

ourMap.set(1,"Pratik");
ourMap.set(2,"wratik");
ourMap.set(3,"hratik");

console.log(ourMap.get(2));


ourMap.delete(1);

console.log(ourMap);

for(let key of ourMap.keys()){
    console.log(key);
}

for(let value of ourMap.values()){
    console.log(value);
}

for(let [key,value] of ourMap){
    console.log(key,value);
}