// document.querySelector('h2')
//     < h2 id = "mw-toc-heading" > Contents​</h2 >​
// const h2 = document.querySelector('h2')
// undefined
// h2.getAttribute('class')
// null
// h2.setAttribute('class', 'purple')
// undefined
// h2.setAttribute('class', 'border') // problema e ca asta o suprascrie pe celalta
// undefined

// solutie:
// let currentClasses = h2.getAttribute('class')
// undefined
// h2.setAttribute('class', `${currentClasses} purple`)
// undefined

// solutie mai buna:
// classList --> returneaza DOMTokenList
// const h2 = document.querySelector('h2')
// undefined
// h2
// <h2 id=​"mw-toc-heading">​Contents​</h2>​
// h2.classList
// DOMTokenList [value: ""]
// h2.classList
// DOMTokenList [value: ""]
// h2.classList.add('purple')
// undefined
// h2.classList.add('border')
// undefined
// h2.classList.remove('border')
// undefined
// h2.classList.contains('border')
// false
// h2.classList.contains('purple')
// true
// !! TOGGLE !! -> ADAUGA / ELIMINA O CLASA!!
// h2.classList.toggle('purple')
// false
// h2.classList.toggle('purple')
// true
// h2.classList.toggle('purple')
// false
// h2.classList.toggle('purple')
// true
// h2.classList.toggle('purple')
// false

// SUMMARY: obj.classList -> metoda usoara de a determina clasele unui obiect + a le manipula
// e mult mai usor decat ce am facut mai sus