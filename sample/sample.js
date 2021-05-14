const counter=document.getElementById("counter");
//counter.innerText="2";


let count=1;
setInterval(() => {
    if(count<100){
        count++;
    counter.textContent=count;
    }
    
}, 100);
