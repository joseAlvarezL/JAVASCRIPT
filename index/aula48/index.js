// Funções dentro de um objeto


// Quando você chama console.log(friends), ele apenas imprime o objeto no console, ou seja, ele mostra a referência da função printFriends, mas não a executa.
//A função printFriends só é executada se você chamá-la explicitamente.
const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 360,
    bookChapters:{
        chap1:'Fundamentals',
        chap2:'1st law'
    },
    printBook: function(){
        console.log('Printing...')
    }
}

book.printBook()