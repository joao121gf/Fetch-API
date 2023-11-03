const idade = 20;
const veriIdade = new Promise((resolve, reject) => {
  if (idade < 18) {
    resolve("MENO");
  } else {
    reject("MAIOR");
  }
});

veriIdade
  .then((msg) => {
    console.log(`Aprovado, a idade é ${msg}`);
  })
  .catch((err) => {
    console.log(`Noa deu certo, a idade é ${err}`);
  });
