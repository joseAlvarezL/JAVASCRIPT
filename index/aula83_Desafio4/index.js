// function update(){
//     console.log('OK')
// }//referencia entre o index js e o index html

function formatMoney(value){
    value = Math.ceil(value*100)/100//ceil() arrendonda pra mais || calculo para trabalhar no ultimo digito 
    value = value.toFixed(2)//fixar o valor decimal em X casa
    return '$ '+ value
}
function formatSplit(value){
    if (value == 1) return value + ' Person'
    return value + ' people'// SE NAO
}

function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    //console.log(bill,tipPercent,split)
    //console.log({bill,tipPercent,split})//validos
    let tipValue = bill*(tipPercent/100)
    // console.log(tipPercent)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    console.log(billEach)

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML=formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML=formatSplit(split)
    document.getElementById('billEach').innerHTML=formatMoney(billTotal/split)
}
