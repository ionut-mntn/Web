const btn = document.querySelector('button').addEventListener('click', (evt) => { console.log(evt) }) // pot sa nici nu pasez vreun argument, ca mai jos !!
// const btn = document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })
// the event object
// --------------
// automatically passed in to our callback ! nu l folosim, we don t caputre it
// long story short: un obiect ce contine informatii despre event-ul generat
// clientX, clientY --> coordonatele locului in care am apasat;
// putem de exemplu daca vrem sa apara o animatie misto acolo une am apasat click sa ne folosim de proprietatile astea
// sau daca vrem sa facem altceva, sa ne foosim de proprietati din acest EventObject
// de multe ori o sa trebuiasca sa rely on it; for instance when we're working with keyboard events, pt ca vrem sa stim ce tasta a fost apasata

const input = document.querySelector('input');
input.addEventListener('keydown', function () {
    console.log("KEYDOWN")
})
input.addEventListener('keyup', function (e) {
    console.log("KEYUP")
    //console.log(this)   //ATENTIE!! aici se refera la elementul input!! nu la event-ul KeyboardEvent_keyDown
    // console.log(this.value) //ATENTIE!! aici se refera la input.value!! nu la event-ul KeyboardEvent_keyDown
    console.log(e);
    console.log(e.key);
    console.log(e.code);
    // diferenta intre key si code:
    //     KeyboardEvent {isTrusted: true, key: "ș", code: "Semicolon", location: 0, ctrlKey: false, …}
    // app_261.js:23 ș // asta e end-result --> ce caracter a fost generat
    // app_261.js:24 Semicolon // the physical key corresponding to the end-result
    // daca schimb limba, key o sa fie un caracter diferit, dar code o sa fie exact tasta apasata !!
})

window.addEventListener('keydown', (evt) => {
    // console.log(evt.key);
    // console.log(evt.code);

    switch (evt.code) {
        case 'ArrowUp':
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log('DOWN');
            break;
        case 'ArrowLeft':
            console.log('LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT');
            break;
        default:
            console.log('IGNORED');
    }

})

// recap: event object ---> smth we have access to in every eventHandler & is passed to the eventHandler automatically
// putem adauga un parametru callback-ului so that we capture it !!!