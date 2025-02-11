// verificando elementos no array
const tempLondon =  [18,13,8,2,-2]
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})//every - checar todos os valores
console.log(tempPositive)
 