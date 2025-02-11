// Operadores Lógicos

// &&  // "And" lógico. Só é true se ambas as condições forem true.
// ||  // "Or" lógico. É true se pelo menos uma condição for true.
// !  // "Not" lógico. Inverte o valor (true vira false e vice-versa).

let temIdadeMinima = false;
let temTituloDeEleitor = true;
let podeVotar = temIdadeMinima && temTituloDeEleitor;
console.log(podeVotar);

let temIadeMinima1 = false;
let temTituloDeEleitor1 = true;
let podeVotar1 = temIdadeMinima || temTituloDeEleitor;
console.log(podeVotar1);


let temIadeMinima2 = false;
let temTituloDeEleitor2 = true;
let podeVotar3 = temIdadeMinima && temTituloDeEleitor;
let podeViajar = !podeVotar3;
console.log('Pode Viajar? '+ podeViajar);

