// hoisting - é um comportamento do JavaScript onde declarações de variáveis e funções são movidas para o topo do código antes da execução.
movie()//funciona - desordenado
function movie(){
    console.log('Up')
}


car()//nao funciona - desordenado - vc esta tentando acessar uma var que nao existe - ela nao e uma funcao separada/declarada, ela esta associada a uma variavel
const car = function(){
    console.log('Tesla')
}


