let greet = function () {
    console.log("HI!");
}

greet();

function callTwice(func) {
    func();
    func();
}

// callTwice(1);
// callTwice(greet);

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

// rollDie();
// callTwice(rollDie()); // asa execut 
// callTwice(rollDie());

function callTenTimes(f) {
    for (let i = 0; i < 10; i++)
        f();
}

callTenTimes(rollDie);