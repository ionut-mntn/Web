const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
// let winningScore = winningScoreSelect.value; cam totu in JS e string !! (JSON)... Deci grija la faze de genul!!
let winningScore = parseInt(winningScoreSelect.value);
// console.log(typeof (winningScore)) // cam totu in JS e string !! (JSON)
let isGameOver = false;

p1Button.addEventListener('click', (e) => {
    // alert('clicked')

    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true
            // p1Display.classList.add('winner'); // sau cu toggle !
            // p2Display.classList.add('loser'); // sau cu toggle ! da nu merge ca nu stiu care castiga / care pierde
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }

})

p2Button.addEventListener('click', (e) => {
    // alert('clicked')

    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true
            // p1Display.classList.add('loser'); // sau cu toggle !
            // p2Display.classList.add('winner'); // sau cu toggle !
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }

})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0
    p2Display.textContent = 0

    // nu stim care castiga / pierde, asa ca le scoatem pe toate
    // cu toggle s-ar putea sa nu mearga !!
    // p1Display.classList.remove('winner', 'loser');
    // p2Display.classList.remove('winner', 'loser');

    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-danger', 'has-text-success');

    p1Button.disabled = false;
    p2Button.disabled = false;

}

resetButton.addEventListener('click', reset)

// NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!!

// on change !! 
// winningScoreSelect.addEventListener('change', e => { // IN ORICE ARROW FUNCTION this este the Window object (=== 'DOM root object'??)
//     console.log(this);
// })

// on change !! 
winningScoreSelect.addEventListener('change', function () { // aici e exact obiectul pe care apelam functia !!
    // console.log(this);
    winningScore = parseInt(this.value);

    console.log(p1Display)
    console.log(p2Display)

    console.log(winningScore)

    console.log(p1Display)
    console.log(p2Display)

    reset();
})

// NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!!