//Localizando itens em uma array primitiva

const num = [6,7,8,9];
console.log(num.indexOf(8))//valor que quer procurar - return index
console.log(num.indexOf(4)) // '-1' significa que não esta presente na array

console.log(num.includes(4))//localizar com true ou false
console.log(num.includes(8))