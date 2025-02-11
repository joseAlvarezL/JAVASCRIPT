//Utilizando a arrow function

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Up'},
    {id: 3, movieName: 'M socio'}
]

console.log(movies.find(movie => movie.movieName == 'Dejavu'))

// O find() percorre o array movies e passa cada objeto para a arrow function.
// Se movie.movieName == 'Dejavu' for true, ele retorna esse objeto e para a busca.
// => aqui e uma function e o return esta incluso 

