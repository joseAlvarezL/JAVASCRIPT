//prompt exibe uma caixa de entrada para o usuário, retorna o valor digitado como string ou null se cancelado.
//Number converte o valor digitado no prompt de string para número.
let Productvalue = Number(prompt("Enter the product vale: "))
console.log(Productvalue);
console.log(typeof(Productvalue));

if (Productvalue >= 20){
    document.getElementById('result').innerHTML='Approved'
}
else{
    document.getElementById('result').innerHTML='Denied'
}