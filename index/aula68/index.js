//esvaziando uma array

let num = [5,6,7,8]

//num = []//1 forma
//num.length = 0//2 forma - tamanho da array
//num.splice(0,4)//3 forma - não recomendada para futuros numeros colocados na array
num.splice(0,num.length)//3 forma - recomendada para array que vão receber mais numeros

console.log(num)
