const guilherme = {
   nome: "Guilherme",
   idade: 27,
   nacionalidade: "brasileiro",
   sexo: "masculino",
};

console.log(guilherme);

const fulano = {
   nome: "fulano",
   idade: 22,
   ...guilherme,
};

console.log(fulano);
