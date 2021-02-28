const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// cheile:
console.log(Object.keys(testScores));

// valorile:
console.log(Object.values(testScores));

// array sub forma: [cheie, valoare1, valoare2, ..., valoareN):
console.log(Object.entries(testScores));

// FOR... IN
// for (let person in testScores)
//     console.log(`${person} scroed ${testScores[person]}`);

let total = 0;
// let length = Object.keys.length; // grija la chestii de genul! keys banuiesc ca e o proprietate, nu o metoda.. sau nici macar proprietate
let length = Object.keys(testScores).length;
for (let score of Object.values(testScores)) {
    console.log(score);
    total += score;
}
console.log(total, length, total / length);


//objects do not have a length!!