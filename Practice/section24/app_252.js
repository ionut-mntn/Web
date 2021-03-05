// remove & removeChild

// const firstLi = document.querySelector('li')
// undefined
// firstLi
// <li class=​"toclevel-1 tocsection-1">​…​</li>​
// const ul = firstLi.parentElement
// undefined
// ul.removeChild(firstLi)
// <li class=​"toclevel-1 tocsection-1">​…​</li>​
// // pana aici am scos primul element din lista de la Contents
// undefined
// const b = ul.document.querySelector('b')
// VM483:1 Uncaught TypeError: Cannot read property 'querySelector' of undefined
//     at <anonymous>:1:23
// (anonymous) @ VM483:1
// const b = document.querySelector('b')
// VM492:1 Uncaught SyntaxError: Identifier 'b' has already been declared
// const b2 = document.querySelector('b')
// undefined
// b2.parentElement.removeChild(b2)
// <b>​Silkie​</b>​
// // kinda jenky
// undefined
// // este varianta cu remove direct, dar nu functioneaza in Internet Explorer
// undefined
// const img = document.querySelector('img')
// undefined
// img.remove()
// undefined
// // am sters prima poza din body
// undefined