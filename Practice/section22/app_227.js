// // print "hello..."
// // pause(3000)
// // print "are you still there?"
// console.log("HELLO!!!");
// setTimeout(() => {
//     console.log("...are you still there?");
// }, 3000); // in miliseconds aicea

// console.log("GOODBYE!!"); // asta se afiseaza inaintea asteaia de deasupra


const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
// Cum oprim asta?
// Raspuns: cu clearInterval
// obs: de fiecare data cand apelam setInterval, acesta returneaza un id pentru acel 'setInterval'

// !! daca scriu clearInterval(id) in consola, voi opri setInterval-ul cu id-ul respectiv !!
