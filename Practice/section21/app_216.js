function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
            alert("STOP TRYING TO CLOSE THE WINDOW");
        }
    }
}

const misteryFunc = makeMysteryFunc();
// ==================================================================
function makeBetweenFunc(min, max) {
    return function (val) {
        return (min <= val && val <= max)
    }
}

const isBetweenFunc = makeBetweenFunc(5, 10);
console.log(isBetweenFunc(3));
// ==================================================================