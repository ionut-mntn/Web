// const h1 = document.querySelector('h1');
// console.dir(h1);

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!'
    // ATENTIE!! DACA CE E INSIDE OF innerText are bold tags sau alte chestii de genul, we are completely overwriting that!!
}

document.querySelector('h1').innerText = '<i>asdahsfa</i>'; // asa ceva trateaza ca text ce e intre apostroafe!!
// intr-un astfel de caz trebuie sa apelam la innerHTML
//document('h1')

document.querySelector('h1').innerHTML = '<i>asdahsfa</i>'; // dar asta merge
//document('h1')

// putem face si chestii de genul:
document.querySelector('h1').innerHTML += '<i>\+AdaugatSiAsta</i>';



