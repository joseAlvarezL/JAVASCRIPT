// configurando parametros default
// Default define um valor pré-definido quando nenhum é passado.aula82


//financiamento - primeiro jeito / n recomendado para valores fixos
// function carLoan(loan,rate,year){
//     //return loan*rate/100* year//valor pago a mais
//     return (loan*rate/100* year)+loan//valor total
// }
// console.log(carLoan(20000, 2.5, 5))

// segundo jeito / recomendado para valores fixos (ex:taxa de juros)
function carLoan(loan,rate = 2.5,year = 5){
    //return loan*rate/100* year//valor pago a mais
    return (loan*rate/100* year)+loan//valor total
}
console.log(carLoan(20000))


