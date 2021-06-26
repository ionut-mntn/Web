const fs = require('fs'); // asa importam module!! (care -evident- nu sunt in scope by default; process, de exemplu, este => no need to import it, to "require" it)
// console.log(fs);

const folderName = process.argv[2] || 'Project'; // si daca totusi nu e folderName? This is where the "|| 'Project' comes in"; daca primul da undefined, o sa se instantieze variabila la a doua valoare, adica cea de dupa "||"

// fs.mkdir('Dogs', {recursive: true}, (err) =>{ // asta e varianta asynchronous
//     console.log("in the callback!");
//     if (err) throw err;
// });
// daca as avea 2 async calls unu dupa altul si depinde logica unuia de a celuilalt, atunci:
// I should be very careful with 2 async calls!! ideal sa nu!
// fs.mkdir('Dogs', {recursive: true}, (err) =>{ // asta e varianta asynchronous
//     console.log("in the callback!");
//     if (err) throw err;
// });
// console.log("I come after MKDIR in the file!");

// fs.mkdirSync('Cats') // synchronous; nu ne pasa de callback! (si in acest caz putem omite si al doilea argument de mai sus!)
// we don't really have proof that it is synchronous

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/styles.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');
//!! the folder containing these files will be created in the directory where
// we run the script from!
