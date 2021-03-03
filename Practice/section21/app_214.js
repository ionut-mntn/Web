// sintaxa declarare obiect
// const obj = { key1: value1, key2: value2, ... , keyN: valueN}

// function returnMeOperation(str) {
//     console.log(str);
//     const avOps = {
//         add: function (a, b) { return a + b; },
//         sub: function (a, b) { return a - b; },
//         mul: function (a, b) { return a * b; },
//         div: function (a, b) { return a / b; }
//     }
//     console.log(avOps[str]);
//     return avOps[str];
// }

// f = returnMeOperation('add');
// console.log(f(2, 3));
// f = returnMeOperation('sub');
// console.log(f(2, 3));
// f = returnMeOperation('mul');
// console.log(f(2, 3));
// f = returnMeOperation('div');
// console.log(f(2, 3));

// -------------------------------------------------------------------------
// function add(x, y) {
//     return x + y;
// }

// cred ca trebuie sa folosesc const oricand lucrez cu obiecte!!
// doar ca aici, pe 'add' nu o pot schimba !!
// const add = function cox(x, y) {

const add = function (x, y) {
    return x + y;
}

// ca in exemplul cu PI; 3.14 nu are nume, ci doar o variabila; 
// asa si mai sus, cum sunt lambda-urile cred eu!!
const PI = 3.14;


// add = function(a, b){
//     return a * b;
// }


// const square = function (num) {
//     return num * num;
// }
