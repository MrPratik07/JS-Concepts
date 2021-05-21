//import superagent from 'superagent';

let input=document.getElementById("input-container");
let button = document.getElementById("search-button");
let image=document.querySelector(".img-container");

function inputLength(s) {
    return s.length;
  }
  
 button.addEventListener('click',()=>{
   
    var output=input.value
    if(inputLength(output) < 0){
        window.alert("Enter proper input");
    }
    
    
    let createImg = document.createElement("img");
    image.innerHTML="";
   //fetch(`https://dog.ceo/api/breed/${output}/images/random`)
   //fetch(`https://dog.ceo/api/breeds/image/random`)
   fetch(`https://dog.ceo/api/breed/${output}/images`)
   .then(response => response.json())
    .then(response=>{
          createImg.setAttribute('src',`${response.message[0]}`);
          //console.log(response.message[0]);
          image.appendChild(createImg);
     });
    
});