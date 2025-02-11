// Tipos Variáveis - Referência 3/3 - Function

function saleStatus(){
    console.log("Approved");
}
saleStatus()



function saleStatu(status, total){// () paramêtro
    console.log("Transaction: "+ status +  "! Total amount: $" + total);
}
saleStatu("Approved", 30);// () argumento