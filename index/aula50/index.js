// Factory


// Essa indústria esta criando esse objeto
function createBook(title, author, pages){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function(){
            console.log('Printing...')
        }
    }
    return book;
    //return é usado para retornar um valor de uma função, terminando sua execução e enviando o resultado.
}

const book1 = createBook('Atomic Habit', 'James', 306);
book1.color = 'white' //Adicionando propriedades

const book2 = createBook('O imbecil coletivo', 'Olavo de Carvalho', 450);
console.log(book1)
console.log(book2)

//Blueprint é como um "molde" que define como algo deve ser feito.
