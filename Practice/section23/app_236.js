const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    isFurry: true,
    family: 'Caninae'
};

// asa facem copie a obiectului; nu cu "[]", ci cu "{}"
const newObject = { ...feline };
const newObject2 = { ...feline, ...canine };
// ATENTIE!! aici conteaza ordinea; amandoua au un atribut (property) 'family'; al doilea il suprascrie pe primul
// si family va fi setat la Caninae; deci newObject3 e diferit de obiectul al doilea
const newObject3 = { ...canine, ...feline, };
// pot in schimb sa precizez eu la ce vreau sa se seteze (un atribut) o proprietate anume, astfel:
const newObject4 = { ...canine, ...feline, family: 'Steele' };

// proba consola:
// newObject
// {legs: 4, family: "Felidae"}
// newObject2
// {legs: 4, family: "Caninae", isFurry: true}
// newObject3
// {isFurry: true, family: "Felidae", legs: 4}
// newObject4
// {isFurry: true, family: "Steele", legs: 4}

// ==================================================================

const obj = { ...[2, 4, 6, 8] } // indicii sunt folositi drept cheie daca incercam asa ceva
const obj2 = { ..."HIII" }; // la fel si aici

// !! de cele mai multe ori, spread se face cand facem o copie a unui obiect !!

// alt use-case: 
// poate vrem sa facem un nou obiect la care sa mai adaugam ceva proprietate
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
// (poate fac niste schimbari in structura sistemului)
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }

// proba consola:
// newUser
// {email: "blueman@gmail.com", password: "tobias123!", username: "tfunke", id: 2345, isAdmin: false}

// wrapup: spread helps us with spreading one source of information into some destination, be it:
// arrays
// iterables
// into function arguments