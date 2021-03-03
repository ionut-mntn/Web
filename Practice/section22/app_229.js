// Every si Some sunt echivalente cu .all & .any din Java (parca si in Linq)

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every(s => s >= 70)
exams.every(s => s >= 90)

exams.some(s => s > 100)
exams.some(s => s > 90)


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

movies.some(m => m.year > 2010)
movies.some(m => m.year > 2020)
movies.every(m => m.year > 1960)
movies.every(m => m.year > 1960)

// astea primesc predicate !! deci lambda-ul trebuie sa returneze boolean