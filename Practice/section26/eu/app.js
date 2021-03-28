
const playerOneScoreSpan = document.querySelector('#playerOneScore');
const playerTwoScoreSpan = document.querySelector('#playerTwoScore');

const plusOnePlayerOneButton = document.querySelector('#plusOnePlayerOne');
const plusOnePlayerTwoButton = document.querySelector('#plusOnePlayerTwo');

const noSelectedRoundsSelect = document.querySelector('#noRoundsSelect');
console.log(noSelectedRoundsSelect);

noSelectedRoundsSelect.addEventListener('select', (e) => {
    if (noSelectedRoundsSelect.value > )
        plusOnePlayerOneButton
})
plusOnePlayerOneButton.maxRounds = noSelectedRoundsSelect.value

plusOnePlayerOneButton.addEventListener('click', e => {
    // console.log(e);
    console.log('intra')
    playerOneScoreSpan.innerText = parseInt(playerOneScoreSpan.innerText) + 1
    // if (playerOneScoreSpan.innerText == noSelectedRoundsSelect.value) {
    if (playerOneScoreSpan.innerText == plusOnePlayerOneButton.maxRounds) {
        // console.log()
        // console.log(plusOnePlayerOneButton);
        plusOnePlayerOneButton.disabled = true;
    }
    // console.log(noSelectedRoundsSelect.value) // gooooood
})

// print(typeof (['a', 'b'])) // grija la asta !!
// console.log(typeof (['a', 'b']));

// console.log(typeof (1))
// console.log(typeof ('1'))
// console.log('1' + 1) // totu la string !!
// console.log(typeof ('1' + 1))
// // console.log(typeof ('1'))


// cum fac chestii de genul???? // cum fac chestii de genul???? // cum fac chestii de genul????
// // const tzara = { a: 1, c: 2 }
// // for (let obj of tzara) {
// //     print obj.value
// // }

// cum fac chestii de genul????

// for (let part of {
//     firstName: 'Ionut',
//     lastName: 'Muntean'
// }) {
//     console.log(part)
// }

// for (let button of {
//     plusOnePlayerOneButton: playerOneScoreSpan,
//     plusOnePlayerTwoButton: playerTwoScoreSpan
// }
// ) {
//     button.addEventListener('click', (event) => {
//         // playerOneScoreSpan.innerText += 1; // asta concateneaza string-uri
//         // playerOneScoreSpan.innerText = String(int(playerOneScoreSpan.innerText) + 1);
//         console.log(button.value)
//         button.innerText = parseInt(button.value.innerText) + 1;

//     })
// }
// cum fac chestii de genul???? // cum fac chestii de genul???? // cum fac chestii de genul????