const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

// asta de dedesubt nu merge, pt ca eu incerca ca in loc de array-ul vechi
// sa asignez un nou array (returnat de movies.map) in "constanta" mea `newMovies` !!
// newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

const newMovies2 movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`)
)
// putem chiar pe o linie sa facem
// const newMovies2 movies.map(movie => `${movie.title} - ${movie.score / 10}`)


