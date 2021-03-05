// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// // exemplu consola:
// // document.all[10]
// // <b>​Silkie​</b>​
// // document.all[10].innerText = "SLICKIE"
// // "SLICKIE"
// // document.all

// const allImages = document.getElementsByTagName('img')

// for (let img of allImages) {
//     // console.log('SURSA: ' + img.src);

//     // img.source = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
//     // !! .src, nu .source !!
//     // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

document.querySelector('p')
document.querySelector('#banner')
document.querySelector('.square')
document.querySelector('img:nth-of-type(2)')

// document.querySelector('a[href=]')
document.querySelector('a[title="Java"]') // ca la CSS; asa se facea selectia pt un element un atribut cu o anumita valoare!!

document.querySelectorAll('p') // inca o data: astea sunt obiecte de tip 'Element' DAR VAD CA TOTUSI SUNT DE TIP NodeList !!!
document.querySelectorAll('p a') // anchor tags somewhere in a paragraph

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
    // link are href, dar <a> nu ??
}