const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// exemplu consola:
// document.all[10]
// <b>​Silkie​</b>​
// document.all[10].innerText = "SLICKIE"
// "SLICKIE"
// document.all