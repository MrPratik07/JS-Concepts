import { get } from 'axios';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const getDogImage = (input) =>{
    return (get(`https://dog.ceo/api/breed/${input}/images/random`))
}



const displayDogClickHandler = ()=>{
var input=document.querySelector(".input-container").value;
input=capitalize(input);
const result = getDogImage(input);
console.log(result.body.message);
}

displayDogClickHandler();



//readFilePromise('./dog.txt')
//   .then((res) => {
//     console.log(`breed: ${res}`)
//     //axios, fetch etc
//     return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`)
//   })
//   .then((res) => {
//     console.log(res.body.message)
//     return writeFilePromise('./dog-image.txt', res.body.message)
//   })
//   .then(() => {
//     console.log('sucessfully written the content in the file')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

















// const getDogPic = async () => {
//     try {
//       const data = await readFilePromise('./dog.txt')
//       console.log(`breeed: ${data}`)
//       const res1 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
//       const res2 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
//       const res3 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
//       const all = await Promise.all([res1, res2, res3])
//       const images = all.map((el) => el.body.message)
//       console.log(images)
//       await writeFilePromise('./dog-image.txt', images.join('\n'))
//       console.log('sucessfully written the contents in the file')
//     } catch (err) {
//       console.log(err)
//       throw err
//     }
//     return '2. ready'
//   }
  