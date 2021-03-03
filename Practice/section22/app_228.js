// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// const odds = nums.filter(n => {
//     return n % 2 == 1;
// })

// const smallNums = nums.filter(n => n < 5);

const numbers = [1, 2, 3, 4, 5, 6, 7, , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
numbers.filter(n => {
    // return n === 4;
    // il adauga in noul array filtered doar pe 4
    return n < 10;
})

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
    },
    {
        title: ''
    }
]

const goodMovies = movies.filter(movie => movie.score > 80)
const goodTitles = goodMovies.map(m => m.title)

// sau direct:
movies
    .filter(m => m.score > 80)
    .map(m => m.title)

const badMovies = movies.filter(movie => movie.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)
// nu schimbam array-ul initial!! returneaza un array nou !!

