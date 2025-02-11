// for in loop - é usado para iterar ( passar por cada item) sobre as chaves de um objeto ou índices de um array.

// for (let chave in objeto) {
//     // Código a ser executado para cada chave do objeto
// }

//Propriedade: valor
const myCar = {
    model: 'BMW', //Propriedade 1
    year: 2022,//Propriedade 2
    km: 61000//Propriedade 3
}

for (let i in myCar){
    console.log(i)
}

for (let i in myCar){
    console.log(i, myCar[i])
    // [] ele vai pegar as informações do myCar e vai passar o que esta como valor dentro de cada informação
}