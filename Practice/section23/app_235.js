const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyat'];

// const allPets = [...cats];
// spread returneaza un nou array!!
// allPets.push('');
// allPets = [...cats, ...dogs]; // !! ATENTIE: ... (spread-ul) returneaza 
// un array nou, deci nu se va face assignment-ul acesta

// const allPets = [...cats, ...dogs];
const allPets = [1, 2, 3, ...cats, ...dogs, 'Speedy'];

const copy = [...cats]; // asa fac o copie --> voi intalni des chestia asta !!

// ['hello']
// [...'hello']
