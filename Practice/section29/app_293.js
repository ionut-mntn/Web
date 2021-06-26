// multe chestii in consola in aceasta sectiune!!
String.prototype.yell = function () {       // we could 
    return `ceva string fratello ${this.toUpperCase()}!!!`;
}

Array.prototype.pop = function () {         // we could even overwrite
    return `Sorry boss I need that, I will never pop it off!`;
}

// care e diferenta intre Array.prototype si actual_array.__proto__?
// diff e ca:
// Array.prototype este efectiv prototipul la care putem umbla si sa
// alteram/adaugam unele metode 
// pe cand __proto__ e o referinta!