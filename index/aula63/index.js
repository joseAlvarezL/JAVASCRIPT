//Adicionando valores a uma array

const num = [5,7,8,9]
// usando o '.' vc tem acesso a todos os métodos e property
num.push(10,12,14) //add elements no final do array
num.unshift(1,2,3) //add inicio sem empurrar muita coisa pra frente
num.splice(3,0,6,7)//add meio (index de inicio / deletar algum index / adicionar os numeros)
console.log(num)