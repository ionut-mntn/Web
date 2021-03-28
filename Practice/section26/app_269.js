const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true
            // p1Display.classList.add('winner'); // sau cu toggle !
            // p2Display.classList.add('loser'); // sau cu toggle ! da nu merge ca nu stiu care castiga / care pierde
            player.display.classList.add('has-text-success');
            player.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

// let winningScore = winningScoreSelect.value; cam totu in JS e string !! (JSON)... Deci grija la faze de genul!!
let winningScore = parseInt(winningScoreSelect.value);
// console.log(typeof (winningScore)) // cam totu in JS e string !! (JSON)
let isGameOver = false;

// p1Button.addEventListener('click', (e) => {
// p1Button.addEventListener('click', function () {

p1.button.addEventListener('click', function () {

    // alert('clicked')

    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === winningScore) {
    //         isGameOver = true
    //         // p1Display.classList.add('winner'); // sau cu toggle !
    //         // p2Display.classList.add('loser'); // sau cu toggle ! da nu merge ca nu stiu care castiga / care pierde
    //         p1Display.classList.add('has-text-success');
    //         p2Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p1Display.textContent = p1Score;
    // }

    updateScores(p1, p2)

})

// p2Button.addEventListener('click', (e) => {
// p2Button.addEventListener('click', function () {
p2.button.addEventListener('click', function () {
    // alert('clicked')

    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === winningScore) {
    //         isGameOver = true
    //         // p1Display.classList.add('loser'); // sau cu toggle !
    //         // p2Display.classList.add('winner'); // sau cu toggle !
    //         p1Display.classList.add('has-text-danger');
    //         p2Display.classList.add('has-text-success');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    //     p2Display.textContent = p2Score;
    // }

    updateScores(p2, p1)

})

function reset() {
    isGameOver = false;
    // p1Score = 0;
    // p2Score = 0;

    // p1Display.textContent = 0
    // p2Display.textContent = 0

    // // nu stim care castiga / pierde, asa ca le scoatem pe toate
    // // cu toggle s-ar putea sa nu mearga !!
    // // p1Display.classList.remove('winner', 'loser');
    // // p2Display.classList.remove('winner', 'loser');

    // p1Display.classList.remove('has-text-success', 'has-text-danger');
    // p2Display.classList.remove('has-text-danger', 'has-text-success');

    // p1Button.disabled = false;
    // p2Button.disabled = false;




    // p1.score = 0;
    // p2.score = 0;

    // p1.display.textContent = 0
    // p2.display.textContent = 0

    // // nu stim care castiga / pierde, asa ca le scoatem pe toate
    // // cu toggle s-ar putea sa nu mearga !!
    // // p1Display.classList.remove('winner', 'loser');
    // // p2Display.classList.remove('winner', 'loser');

    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-danger', 'has-text-success');

    // p1.button.disabled = false;
    // p2.button.disabled = false;

    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }


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

    // console.log(p1Display)
    // console.log(p2Display)

    // console.log(winningScore)

    // console.log(p1Display)
    // console.log(p2Display)

    reset();
})

// NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!! // NOTICE THE DIFFERENCE !!!