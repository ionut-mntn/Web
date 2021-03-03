// !! cica e common o asemenea chestie !!
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver] = scores; // !! destructuring; un fel de mapping, atat cat poate !!
console.log(gold);
// gold = 2; // ?? dc nu pot modifica valoarea asta ?? nu e o initializare de array asta?
// well, judgin by my self-given example below (so proud :)) ), not quite !!
// si sintaxa mai ciudata indica faptul ca nu e chiar un array. 
// eu vad treaba cam asa: ala e ca un array anonim (fara referinta la el, doar poate prin prima variabila din el)
// dar ticnau... (nu mai stiu ce voiam sa zic aici...)
console.log(gold);

const test = [1, 2, 3];
test[0] = 10;

console.log(test);

// alt exemplu:

const [gold2, silver2, bronze2, ...everyoneElse] = scores;

// alt exemplu:
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];
const [gold3, silver3, bronze3] = raceResults;
console.log(gold3);
console.log(silver3);
console.log(bronze3);

const [fastest, ...everyoneElse2] = raceResults;
console.log(fastest);
console.log(everyoneElse);
