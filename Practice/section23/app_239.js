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

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// cum fac sa redenumesc variabilele that I "pull out"?
// raspuns:
// const { born: birthYear } = user;
// alt exemplu:
const { born: birthYear, died: deathYear } = user;
// const { born: birthYear, died: deathYear='N/A' } = user;
// daca nu gasea valoare pt died, punea 'N/A'

const usr2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const { city2, state2, died2 } = user;
const { city2, state2, died2 = 'N/A' } = user;


