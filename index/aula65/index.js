//Localizando itens em uma array de referênca - array tipo objeto

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Up'},
    {id: 3, movieName: 'M socio'}
]

console.log(movies)

console.log(movies.includes({id: 1, movieName: 'Dejavu'}))
//.includes() não funciona para objetos porque compara referências de memória.

console.log(movies.find(function(movie){
    return movie.movieName == 'Dejavu'
}))//só funciona com uma funcao