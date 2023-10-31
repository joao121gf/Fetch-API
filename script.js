// let age = 2
// const result = new Promise((resolve, reject) => {
//     if (age > 19){
//         resolve = console.log('maior')
//     }else{
//         reject = console.log('menor')
//     }
// })

// criacao de promessa

const myPromise = new Promise((resolve, reject) => {
  const nome = "matheus";
  if (nome === "matheus") {
    resolve("Usuario matheus encontrado");
  } else {
    reject("O usuario nao foi encontrado");
  }
});

myPromise.then((data) => {
    console.log(data)
});
