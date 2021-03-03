function add(x, y) {
    return x + y;
}

// sintaxa declarare obiect
// const obj = { key1: value1, key2: value2, ... , keyN: valueN}

function returnMeOperation(str) {
    console.log(str);
    const avOps = {
        add: function (a, b) { return a + b; },
        sub: function (a, b) { return a - b; },
        mul: function (a, b) { return a * b; },
        div: function (a, b) { return a / b; }
    }
    console.log(avOps[str]);
    return avOps[str];
}

f = returnMeOperation('add');
console.log(f(2, 3));
f = returnMeOperation('sub');
console.log(f(2, 3));
f = returnMeOperation('mul');
console.log(f(2, 3));
f = returnMeOperation('div');
console.log(f(2, 3));