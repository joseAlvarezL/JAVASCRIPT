// utilizando argumentos em funcoes

//function price(a,b){//(a,b) =valores/arguments(args)
function price(){ //recomendado
    let total = 0
    for(let value of arguments)//utiliza todos os args
        total += value
    return total
}
console.log(price(10,20,30,40))


