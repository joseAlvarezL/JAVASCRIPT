// iniciando com funcoes
// existem 2 tipos de funcoes

// Function Declaration - aonde eu vou declarar o nome desse função
function movie(){
    console.log('Up')
}
movie()//com esse ponto eu estou fazendo uma CALL e chamar a funcao


// Function Expression - e uma funcao sem nome, a unica forma que eu tenho de identificar e associando ela a uma variavel
const car = function(){
    console.log('Tesla')
}
car()

const truck = car
truck() // 2 variaveis sao associadas a mesma funcao
