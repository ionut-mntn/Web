// function rollDie(numSides){
//     // return 
//     if (numSides === undefined) // daca nu pasez parametrul
//         numSides = 6
//     return Math.floor(Math.random() * numSides) + 1;
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}


// nu e destul de destept sa stie ca vreau ca ce ii pasez sa puna in al doilea argument al functiei
// orinea conteaza !! default parameters mereu la final !!
function greet(msg = "Hey there", person) {
    console.log(`proba: ${msg}, proba2:${person} proba3`);
}

function greet2(person, msg = "Hey there") {
    console.log(`${msg}, ${person}`);
}

