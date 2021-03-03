// Sintaxa generala!!
// [3, 5, 7, 8, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// [1, 2, 3].reduce((a, b) => a + b)
// ========================================================================
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// classic:
const total = prices.reduce((total, price) => {
    return total + price
})

// one-liner:
// const total = prices.reduce((total, price) => total + price)

// eu:
// prices.reduce((acc, curr) => {
//     acc + curr;
// })

// ========================================================================

const minPrice = prices.reduce((a, b) => a < b ? a : b)
// DECI ATENTIE!!
// !! reduce functioneaza atat cu acumulatori, cat si cu boolean !!

// ========================================================================

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand by me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const highestRatedMovie = movies.reduce((m1, m2) => { return m1.score > m2.score ? m1.score : m2.score; })
const highestRate = movies.reduce((m1, m2) => m1.score > m2.score ? m1.score : m2.score)
// const highestRatedMovie = movies.reduce((bestMovie, currMovie) => bestMovie.score > currMovie.score ? bestMovie : currMovie)


// obs: putem stabili a starting point for the accumulator of reduce
const evens = [2, 4, 6, 8]
evens.reduce((sum, num) => sum + num,
    //pana aici e primu argument
    100 // iar asta e al doilea argument
)