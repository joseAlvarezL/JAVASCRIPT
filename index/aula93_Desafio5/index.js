const colors = ['Red','black','Blue','Yellow','Purple','Green']
//querySelector: Seleciona um elemento do DOM usando seletor CSS.
const color = document.querySelector('.color')
const btn = document.getElementById('btn')

//Cor - escolhida/Manual
// btn.addEventListener('click', function(){
//     document.body.style.background = colors[3]
// })

//Cor - Random
// addEventListener: Escuta eventos (ex: "click") e executa uma função quando ocorre.
btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    // console.log(randomColor)
    color.textContent = colors[randomColor]
})

// //forma manual - `()*10`
// function getRandomColor(){
//     return Math.floor(Math.random() * 10) //`()*10: ele vai contar ate 10 - forma manual`
// }
//usando index do array
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)// agora ele pega os numeros do index, sem necessidade de colocar manualmente
}




//O `.` (ponto) é o operador de acesso a propriedades em JavaScript.