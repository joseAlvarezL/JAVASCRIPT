//removendo itens da array

const num = [5,6,7,8]
const final = num.pop()//tirar ultimo item da minha array
console.log(final)//verificar se tirou o 8

const final1 = num.shift()//remover primeiro index
console.log(final1)//verifica se tirou o 5

const final2 = num.splice(1,1)
console.log(final2)


console.log(num)
