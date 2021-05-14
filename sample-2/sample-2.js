
const arr = ["goa","shimla","sikkim","maldives"];

// example of creating a tag using DOM
let i=0;
function getTourist (){
    const ul=document.querySelector(".list-container");
    arr.forEach( element => {
        const li=document.createElement("li");
        li.classList.add("tourist-list");
        const ld=document.createElement("ld");
        ld.setAttribute("id",++i);
        ld.classList.add("tourist-data");
        const touristPlace=document.createTextNode(element);
        ld.appendChild(touristPlace);
        li.appendChild(ld);
        ul.appendChild(li);
    });
    
};

window.addEventListener("load",getTourist);