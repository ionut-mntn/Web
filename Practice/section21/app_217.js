const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        // return num * num * num;
        return num ** 3;
    },
    10: function (num) {
        return num + 10;
    }
}

// console.log(myMath.square(2));
console.log(myMath.cube(2));
console.log(myMath["cube"](2));
// console.log(myMath[cube](2)); // asta nu merge; trebuie neaparat string acolo
// sau constanta, gen: myMath[10]...

// vad ca variantele astea de dedesubt merg, dar varianta de deasupra cu "cube" fara ghilimele nu
// keywords: indexare string obiect acces
console.log(myMath[10](2));
console.log(myMath['10'](2));

// DAR !! exista o scurtatura, pt ca asta (a declara metode pt un obiect) se intampla des in JavaScript

const myMath2 = {
    PI: 3.14159,
    // square: function (num) {
    square(num) {
        return num * num;
    },
    // cube: function (num) {
    cube(num) {
        // return num * num * num;
        return num ** 3;
    },
    10(num) {           // si chiar merge si asa vad !!
        return num + 10;
    }
}
console.log("a doua varianta");
// console.log(myMath2.10(2)); // asa chiar nu o sa vrea !!
console.log(myMath2[10](3)); // completeaza implicit la adresare ca la array