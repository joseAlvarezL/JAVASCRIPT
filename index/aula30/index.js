// Operadores Lógicos com Strings

let corCliente = 'white';
let corEstoque = 'black';
let corVendida = corCliente || corEstoque;
console.log(corVendida)

let corCliente1 = undefined;
let corEstoque1 = 'black';
let corVendida1 = corCliente1 || corEstoque1;
console.log(corVendida1)