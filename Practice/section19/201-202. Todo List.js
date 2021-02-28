
let toDos = [];
// as fi putut sa fac variabila asta const, adica obiect
// const e cel mai comun cu array-uri aparent !!
// si seminfica ca nu se schimba referinta, nu continutul!!

let input;
do {
    input = prompt("What would you like to do?")
    switch (input) {
        case 'new':
            input = prompt("Enter new todo:")
            toDos.push(input);
            console.log(`'${input}' added to list`)
            break;
        case 'list':
            console.log('*********************')
            // for (let todo of toDos)
            //     console.log(todo);
            let len = toDos.length;
            for (let i = 0; i < len; i++)
                console.log(i + 1 + ':', toDos[i]);
            console.log('*********************')
            break;

        case 'delete':
            do {
                input = parseInt(prompt("Enter index of todo to be removed:"));
            } while (!input);
            console.log(console.log(`'${toDos[input - 1]}' removed from list`));
            toDos.splice(input - 1, 1); // incepand cu indexul 'input', sterg 1 element
        // asa - cu splice -  e cel mai usor daca avem index-ul
        case 'quit':
            console.log('OK, YOU QUIT THE APP');
            return;
        default:
            console.log('I do not recognize that');
    }
} while (true);  // verific de 2 ori cumva aicea ...
console.log('pe aici nu se mai ajunge!');
// {
//     console.log(greeter);
//     var greeter = 'say hello';
// }