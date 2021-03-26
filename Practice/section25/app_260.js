const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorize() {   // daca asta ar avea un argument ( si cred ca doar unu si poate sa aiba, acela este eventul !!!)
    // CRED CA: ARGUMENTUL PE CARE IL IA FUNCTIA DE CALLBACK ESTE ARGUMENTUL?? de fapt nu cred....
    this.style.backgroundColor = makeRandColor();   //this aici se refera la elementul (tag-ul pentru care se aplica functia de callback mai jos in for-ul din addEventListenerOnStrFunc)
    this.style.color = makeRandColor();
}

// function addEventListenerOnClickFunc(objectList, func) {
//     for (let object of objectList)
//         object.addEventListener('click', func);
// }
// const buttons = document.querySelectorAll('button');
// const h1s = document.querySelectorAll('h1');
// addEventListenerOnClickFunc(buttons, colorize);
// addEventListenerOnClickFunc(h1s, colorize);

function addEventListenerOnStrFunc(objectList, str, func) {
    for (let object of objectList)
        object.addEventListener(str, func);
}
const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
addEventListenerOnStrFunc(buttons, 'click', colorize)
addEventListenerOnStrFunc(h1s, 'click', colorize)


// const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//     button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize)
// }

// pot parametriza si mai tare si sa fac ofunctie addEventListener(objectList) 
// sau chiar:
// addEventListener(objectList, func)
// ascended:
// addEventListen
