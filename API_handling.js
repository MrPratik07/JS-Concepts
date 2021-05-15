

// The API used is Chuck Norris 
// fetch will help to get the data from API

fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    var joke = data.value;
    console.log(joke);
})
.catch();