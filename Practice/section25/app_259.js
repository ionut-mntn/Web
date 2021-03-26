const changeColorButton = document.querySelector('#changeColorButton');

const body = document.querySelector('body'); // il pot selecta sau il pot lua direct din: document.body !!

const h1 = document.querySelector('h1') // doar primul il selecteaza ! (oricum am numai unu!)

// console.log(body);

changeColorButton.addEventListener('click', () => {

    // console.log(`rgb(${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))})`);

    // body.style.color = `rgb(${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))})`
    // !!! asta de aici de deasupra e culoarea textului !!!
    const newColor = `rgb(${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))}, ${Math.floor(0 + Math.random() * (255 - 0))})`;
    // am scris pedagogic aici (formula in general); dar pot sa o scurtez la: Math.floor(Math.random())
    body.style.backgroundColor = newColor;
    // amintim: daca in css este: background-color, aici in JS este backgroundColor !!
    h1.innerText = newColor;

})

// floor(a + rand() * (b - a))