let maxNumber = parseInt(prompt("Welcome! Enter your max number:"));
while (!maxNumber) { // cat timp nu se introduce un numar valid !
    maxNumber = parseInt(prompt("Please enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maxNumber) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess:"))
let noAttempts = 1;
while (parseInt(guess) != targetNum) {

    if (guess === 'q') break;

    if (guess > targetNum)
        guess = (prompt("Too high! Enter a new guess:"));
    else
        guess = (prompt("Too low! Enter a new guess:"));
    noAttempts++;
}

if (guess === 'q') {
    console.log("Ok, you quit!");
}
else {
    console.log("CONGRATS YOU WIN!")
    console.log(`YOU GOT IT! It took you ${noAttempts} guesses`);
}