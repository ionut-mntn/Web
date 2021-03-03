// e nu fel de flatten!!

// INTREBARE: 
// cum evalueaza JS asta:
// console.log(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456);
// ? pt ca rezultatul il afiseaza bun

console.log(Math.max([13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]));
console.log(Math.min([2, 5, 1]));

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
console.log(Math.max(nums)); // NaN; Math.max() asteapta separate arguments

// solutie:
// we "spread" them using '...'
console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log(nums);
console.log(...nums);

// we can spread anything that we can iterate over, as in for ... of

console.log('hello');
console.log(...'hello');