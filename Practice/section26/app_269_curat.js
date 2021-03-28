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

            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playTo')

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {

    updateScores(p2, p1)

})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () { // aici e exact obiectul pe care apelam functia !!

    winningScore = parseInt(this.value);
    reset();
})
