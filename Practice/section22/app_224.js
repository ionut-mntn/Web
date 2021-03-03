// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

const add = function (x, y) {
    return x + y;
}

function nume(x, y) { // aici trebuie sa ii dam un nume
    return x + y;
}

(x, y) => {  // la fel si aici: nu putem face asta

}

//DAR PUTEM:
const add2 = (x, y) => {
    return x + y;
}

// const square = (num) => { // daca avem un singur argument, putem omite parantezele!!
const square = num => { // daca avem un singur argument, putem omite parantezele!!
    return num * num;
}

const rollDie = () => { // daca nu avem argumente trebuie sa apara si parantezele rotunde !!
    return Math.random() * 6 + 1;
}
