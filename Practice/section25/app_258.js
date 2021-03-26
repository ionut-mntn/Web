// const obj = document.querySelector('#v2'); // doar pe primu mi-l gaseste
// const obj = document.querySelectorAll('#v2'); // aparent mi-i gaseste pe amandoi da nu imi da nicio avertizare
// console.log(obj);



const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', function () {
    alert('hawMiaw')
})

// CALLBACK = FUNCTIE CARE VREM SA FIE EXECUTATA DUPA CE EXECUTIA UNEI ALTEI FUNCTII S-A TERMINAT
// (de exemplu, ma gandesc ca in cazul event-urilor: un event inseamna ca s-a apelat o functie, iar 
// eventHandler-ul nostru spune cum sa se reactioneze in urma apelului acelei functii, adica in urma trigger-ului event-ului, ... i suppose)
// ORICE FUNCTIE IN JAVASCRIPT PE CARE O PASAM CA ARGUMENT ESTE "A CALLBACK FUNCTION" !!

btn3.addEventListener('mouseup', () => {
    alert('ai dat drumu la buton boss!')
}) // dar obs ca se bate cap in cap cu ala de mai sus ( BA NUUU )
// pt ca ala de mai sus imi da alerta exact atunci cand dau click, iar asta de acuma cand dau drumu la click;
// fiindca alerta de la ala de mai sus apare chiar la click, se interpreteaza ca dau drumu la click cand apare alerta de la ala de mai sus!!
// BA NU!! NU E ADEVARAT.. M-am grabit eu; e posibil tho sa se intample asa ceva?? 2 eventHandlers to overlap

// key press de exemplu nu functioneaza cu un buton !!


// dc e mai buna varianta asta??
// 

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT")
}


const tasButton = document.querySelector('#tas');


// tasButton.onclick = twist;
// tasButton.onclick = shout;
// problema aici e ca adoua suprascrie prima!!

// dar asa merge!!
tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);
//tasButton.addEventListener('click', twist); // notice that if I mistakenly add another eventListener for a function, ea se apeleaza tot numai o data!!
// putem pasa optiuni: (capture, useCapture)
//tasButton.addEventListener('click', twist, { once: true }); // pot adauga si un al treilea parametru; in cazul de fata, o sa se execute callback-ul(adica functia 'twist' aici) numai o data!!
// asta ar fi primul motiv !!

// al doilea:
// avem mult mai mult control
// avem si .removeEventListener!

// let proba1, proba2 = document.querySelector('#tas'), document.querySelector('v3') // asa nu!
// dar asa merge:
let proba1 = document.querySelector('#tas'), proba2 = document.querySelector('#v3');
console.log(proba1, proba2);
console.log(proba1, proba2);