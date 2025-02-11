// Constructor

function CreateBook(title, author, pages){
    //this é uma forma de se referir ao objeto atual.
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
}

//new cria um novo objeto
const book1 = new CreateBook('Atomic', 'Andrew', 321);
console.log(book1);

//Pascal Case é uma convenção onde a primeira letra de cada palavra em um nome é maiúscula, usada principalmente para nomes de classes ou construtores em JavaScript.

//Garbage Collector é nada mais que uma feather(facilidade) do JavaScript, onde vc não precisa configurar a reserve de memória para uma variável

