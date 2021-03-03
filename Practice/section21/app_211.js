let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
// aici nu are treaba cu parametrii!! nu sunt pasati argumente aici
// aici are treaba cu vizibilitatea unei variabile (globale)

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}
console.log(bird)
birdWatch();
console.log(bird);