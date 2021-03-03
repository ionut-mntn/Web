// The Arguments object
//  

Math.min(2, 3, 4, 5, 1, 2, 3, 4, 5); // aici pasam oricate argument
// astea sunt colectate automat in arguments
// function sum() {
//     // console.log(arguments);
//     return arguments.reduce((total, el) => total + el)
//     // ARGUMENTS IS NOT AN ARRAY! DECI NU ARE NICIO METODA DE GENUL .reduce()
//
// }

// in loc de varianta de mai sus:

// =================================

// function sum(nums) {
//     console.log(nums)
// }
// sum(3, 5) // vad ca nu da eroare asa ( cu parametrul lasat "nums", fara rest operator-ul "...)

function sum(...nums) {
    console.log(nums);
    console.log(arguments);
    return nums.reduce((total, el) => total + el)
}

// output consola:


function sum2(a, ...nums) {
    // a va fi primul element pasat, in nums am restul elementelor
    console.log(nums);
    console.log(arguments);
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) { // take the first two specifically, and then take the rest into everyoneElse
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`GOLD MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}


// !!!ARGUMENTS NU EXISTA IN ARROW FUNCTION DELOC!!!