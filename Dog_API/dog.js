//import superagent from 'superagent';


// var input=document.getElementById("input-container");
//  var button = document.getElementById("search-button");

// function inputLength() {
//     return input.value.length
//   }
  

// // function capitalize(string) {
// //     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// // }

// // const getDogImage = (input) =>{
// //     return (superagent(`https://dog.ceo/api/breed/${input}/images/random`))
// // }


// const displayDogClickHandler= () => {
//     //console.log("Hellow")
//     if(inputLength()>0){
//         console.log(input.value);
//     }

// //const result = getDogImage(input);
// //console.log(result.body.message);

// }

// displayDogClickHandler();

// //button.addEventListener('click',displayDogClickHandler);







function factorial(n){
    if(n==0){
        return 0;

    }
    if(n==1){
        return 1;
    }

    return n*factorial(n-1);
}

console.log(factorial(5));