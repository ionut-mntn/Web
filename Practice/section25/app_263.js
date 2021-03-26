const input = document.querySelector('input');

// input.addEventListener('change', function (event) {
//     console.log('change event');
//     // intr un input-change-event se considera ca apare o schimbare doar atunci cand: 
//     // 1) apare o schimbare in input field 
//     // + 
//     // 2) we lose focus of the input !! cand schimbam content-ul NU se considera schimbare !!

// })

const h1 = document.querySelector('h1')

input.addEventListener('input', function (e) {

    // intr-un input-input-event se considera ca apare o schimbare oricand se schimba ceva in input field !! 
    // console.log('input event');
    // console.log(e);
    // !! in e.data avem ce s-a adaugat de la ultimul event ( la stergere, copy-paste, cut si probabil si alte operatii --> vad ca se seteaza la null!)

    h1.innerText = input.value; // !! asta merge
    // h1.innerText = input.innerText; // !! dar asta NU.. DE CE?? dc asta e setat la null??
    // h1.innerText = input.innerHTML; // .... nici asta !!
    // mna... de avut grija la chestii de genul !!
    // console.log(input.innerText);

})
