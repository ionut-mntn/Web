// hello.toUpperCase();
try {
    hello.toUpperCase();
}
// catch(){
catch {
    console.log("ERROR!!!!");
}
console.log("AFTER!");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) // avem acces la exceptie aici
    {
        console.log(e);
        console.log("Please pass a string next time!");
    }
    // evident, daca nu pasam un string, vom avea erori !!;
    // console.log()
}