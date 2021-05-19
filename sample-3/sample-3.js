
const arr =["banana","mango","apple","strawberry"];

//const billItems = [{
    //     id: 1,
    //     itemName: "Bread",
    //     price: 20
    //   }, {
    //     id: 2,
    //     itemName: "Butter",
    //     price: 50
    //   }, {
    //     id: 3,
    //     itemName: "Tomatoes",
    //     price: 30
    //   }, {
    //     id: 4,
    //     itemName: "Onion",
    //     price: 40
    //   }, {
    //     id: 5,
    //     itemName: "Pomegranate",
    //     price: 60
    //   }, {
    //     id: 6,
    //     itemName: "Apple",
    //     price: 40
    //   }, {
    //     id: 7,
    //     itemName: "Grapes",
    //     price: 30
    //   }, {
    //     id: 8,
    //     itemName: "Mango",
    //     price: 100
    //   }]




const onSearchChangeHandler = () => {
    const ol=document.querySelector("ol");
    ol.innerHTML="";
    let search = document.querySelector(".input").value;
    search=search.toLowerCase();
    arr.forEach((e) => {

        if(e.includes(search)){
            const li=document.createElement("li");
            
            li.createTextNode(e);
            ol.appendChild(li);
        }
    })
}

onSearchChangeHandler();


//console.log(arr.includes("b"));

// const display = document.querySelector(".display-container");
//  const ol=document.createElement("ol");







