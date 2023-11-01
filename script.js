// let age = 2
// const result = new Promise((resolve, reject) => {
//     if (age > 19){
//         resolve = console.log('maior')
//     }else{
//         reject = console.log('menor')
//     }
// })

// criacao de promessa

// const myPromise = new Promise((resolve, reject) => {
//   const nome = "matheus";
//   if (nome === "matheus") {
//     resolve("Usuario matheus encontrado");
//   } else {
//     reject("O usuario nao foi encontrado");
//   }
// });

// myPromise.then((data) => {
//   console.log(data);
// });

const trataErro = new Promise((resolve, reject) => {
  let age = 17;
  if (age < 18) {
    resolve("ERRO, DE MENOR");
  } else {
    reject("MAIORIDADE, PROSSEGUIR COM O COD");
  }
});



trataErro
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
