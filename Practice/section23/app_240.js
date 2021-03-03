const user = {
    email: 'harvey@gmail.com',
    password: 'ceva',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Mil was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function fullName2(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

// daca de exemplu, vrem din obiectul de tip user pe care il primim ca parametru sa folosim doar cateva
// atribute(proprietati), iar acesta are multe proprietati, 
// we can deconstruct on its way into the function

function fullName3({ firstName, lastName }) {
    return `${user.firstName} ${user.lastName}`;
}

// putem pasa chiar si default params
function fullName3({ firstName, lastName = 'Smith' }) {
    return `${user.firstName} ${user.lastName}`;
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
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

// alt exemplu de destructuring:
// movies.filter(movie => movie.score >= 90)

// observatie: daca puteam face a function arrow fara primele paranteze rotunde (in cazul in care aveam un singur argument),
// aici - cand folosim destructuring - nu mai putem omite acele paranteze; so I guess it's always better to use them !! 
movies.filter(({ score }) => score >= 90) // nonetheless, asta tot filme o sa filtreze, deci o sa returneze o lista de filme, nu de scoruri!!
// movies.filter({ score }=> score >= 90) // asa era gresit

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

// AVANTAJE:
// WE DON'T HAVE TO:
// ->  REFERENCE THE OBJECT ALL OVER THE PLACE
// -> MAKE SEPARATE VARIABLES
// -> EXTRACT THINGS OURSELVES (CAM ACELASI LUCRU CU "MAKE SEPARATE VARIABLES")
movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})