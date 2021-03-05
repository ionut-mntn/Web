const firstLink = document.querySelector('a')

// astea 2 de dedesubt fac acelasi lucru
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));
// DAR EXISTA TOTUSI O DIFERENTA!
// A DOUA VARIANTA IA DIRECT DIN HTML
// PRIMA VARIANTA (ACCESEZ O PROPRIETATE DIRECT PRIN ELEMENT) --> ASTA TRECE PRIN JavaScript (prin obiectul)

//output consola:
// file:///E:/wiki/List_of_chicken_breeds
// app_248.js:3 /wiki/List_of_chicken_breeds

// console.log(firstLink.href);
console.log("fl=", firstLink);
firstLink.getAttribute('title');
firstLink.setAttribute('href', 'http://www.google.com');
console.log("fl=", firstLink);
// console.log(firstLink.href);
// nu am input ul asta
// document.querySelectorAll('input')[1]
// const input = document.querySelectorAll('input[type="text"]') //GRIJA!! AICI ERA PROBLEMA
const input = document.querySelector('input[type="text"]')
// input // "text"
console.log(input);
input.type = 'password'
input.type = 'color'
input.setAttribute('type', 'text')

// deci mai multe feluri in care putem face acelasi lucru;
// ori direct prin proprietate pe obiectu JS
// sau lucram direct cu atributele insusi, ON THE MARKUP!!



