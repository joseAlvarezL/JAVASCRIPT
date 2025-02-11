// for of loop

// O for...of percorre os valores de uma coleção, enquanto o for...in percorre as chaves (ou índices no caso de arrays).

const friends = ['Marcos', 'Ana', 'José'];

// não recomendado
for(let i in friends){
    console.log(i,friends[i])
}

// recomendado
for(let i of friends){
    console.log(i)
}
// é como se eu falasse dentro não do index friends (0,1,2) - for in
// mas dentro do friends (o conteúdo e valor) - for of

