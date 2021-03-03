// const rollDie = () => { // daca nu avem argumente trebuie sa apara si parantezele rotunde !!
//     return Math.random() * 6 + 1;
// }


// cu paranteze rotunde retrnam ce e inauntru fara return !!
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => {
    return a + b;
}

const add = (a, b) => (
    a + b;
)

// chiar mai scurt, pe o singura linie: (si chiar mai sus, exemplul cu Math)
const add = (a, b) => a + b

// ============================================================================

const isEven = function (num) { // regular function expression
    return num % 2 === 0;
}

const isEven = (num) => {  // arrow function with parens around param
    return num % 2 === 0;
}

const isEven = num => {  // no parens around single param
    return num % 2 === 0;
}

const isEven = num => (  // implicit return
    num % 2 === 0;
)

const isEven = num => num % 2 === 0;  // one-liner implicit return

// IMPLICIT RETURNS WORK WHEN AND ONLY WHEN THERE IS ONE SINGLE STATEMENT IN THE BODY OF OUR FUNCTION!!
