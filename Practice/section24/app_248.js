// rezumat:
// dash-ul nu e valabil in javascript !!
// tot ce exista in CSS este camelCased aici !!

// obj.style returneaza un obiect de tip CSSStyleDeclaration - DAR ATENTIE: cu stilurile inline din HTML !! in care am toate stilurile ce ma intereseaza, dar doar acces read-only
// daca vrem sa modificam ceva la stiluri o facem prin obj.style.proprietate !! DAR ATENTIE: ce alteram va fi adaugat inline in HTML

// window.getComputedStyle returneaza un obiect de tip CSSStyleDeclaration - DAR ATENTIE: este un obiect read-only!!





// const h1 = document.querySelector('h1')
// ATENTIE!
// THE STYLE OBJECT DOES NOT CONTAIN THE CURRENT STYLES!! (DACA DEFINIM SEPARAT STYLESHEET-UL)

// schimbam in css h1 -> color olive;
// dar observam in consola ca nu se schimba nimic;
// Mai mult, mai toate proprietatile sunt empty strings!!

// copy-paste consola:
// const h1 = document.querySelector('h1')
// undefined
// h1
// <h1>​Silkie Chickens​</h1>​
// h1.style
// CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
// h1.style.color
// ""
// h1.style.color='green'
// "green"
// h1.style.border='2px solid pink'
// "2px solid pink"
// !! CHESTII DE GENUL APLICA INLINE STYLES !! (which is not that ok)
// varianta mai buna ar fi folosind o clasa!! o adaugam sau we remove it from elements


const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// Deci, o problema pe care am observat-o este ca :
// daca nu scriu inline style-urile, nu am acces la acel stil !
// Deci, de exemplu, daca vreau sa fac element de aceeasi dimensiune
// a unui alt element --> eu nu stiu acel "alt element" ce fontSize are (fara a ma uita la fisierul CSS)
// O metoda de a DETERMINA(am scris cu majuscule pt ca ce returneaza document.getComputedStyle() este read-olny) proprietatea care ma intereseaza(in acest caz fontSize-ul) este:
// window.getComputedStyle(elementulCareMaIntereseaza) --> varianta asta imi da stilul dupa ce browserul a calculat tot ce trebuie calculat pentru a aplica stilul; 
// Ma refer aici la cazuri de genul: am mai multe stylesheet-uri - exista conflicte de stiluri intre acestea, conflicte de specificitate
// Deci unele stiluri ar putea fi aplicate ca mai apoi sa fie suprascrise; de asta folosim window.getComputedStyle(elementCeMaIntereseaza)
// DAR -din nou- ATENTIE!! window.getComputedStyle --> returneaza un obiect de tip CSSStyleDeclaration care e read-only!! 
// deci pana acum, daca vreau o schimbare, tot inline tre sa o fac( probabil ca adaugand o clasa nu mai trebuie inline!!)

// eroare consola:
// VM2399:1 Uncaught DOMException: Failed to set the 'color' property on 'CSSStyleDeclaration': These styles are computed, and therefore the 'color' property is read-only.
//     at <anonymous>:1:34
// OARE TOT CE E COMPUTED E READ-ONLY?

// //consola:
// const h1 = document.querySelector('h1')
// undefined
// h1.style.fontSize
// ""
// window.getComputedStyle
// ƒ getComputedStyle() { [native code] }
// window.getComputedStyle(h1)
// CSSStyleDeclaration {0: "align-content", 1: "align-items", 2: "align-self", 3: "alignment-baseline", 4: "animation-delay", 5: "animation-direction", 6: "animation-duration", 7: "animation-fill-mode", 8: "animation-iteration-count", 9: "animation-name", 10: "animation-play-state", 11: "animation-timing-function", 12: "appearance", 13: "backdrop-filter", 14: "backface-visibility", 15: "background-attachment", 16: "background-blend-mode", 17: "background-clip", 18: "background-color", 19: "background-image", 20: "background-origin", 21: "background-position", 22: "background-repeat", 23: "background-size", 24: "baseline-shift", 25: "block-size", 26: "border-block-end-color", 27: "border-block-end-style", 28: "border-block-end-width", 29: "border-block-start-color", 30: "border-block-start-style", 31: "border-block-start-width", 32: "border-bottom-color", 33: "border-bottom-left-radius", 34: "border-bottom-right-radius", 35: "border-bottom-style", 36: "border-bottom-width", 37: "border-collapse", 38: "border-image-outset", 39: "border-image-repeat", 40: "border-image-slice", 41: "border-image-source", 42: "border-image-width", 43: "border-inline-end-color", 44: "border-inline-end-style", 45: "border-inline-end-width", 46: "border-inline-start-color", 47: "border-inline-start-style", 48: "border-inline-start-width", 49: "border-left-color", 50: "border-left-style", 51: "border-left-width", 52: "border-right-color", 53: "border-right-style", 54: "border-right-width", 55: "border-top-color", 56: "border-top-left-radius", 57: "border-top-right-radius", 58: "border-top-style", 59: "border-top-width", 60: "bottom", 61: "box-shadow", 62: "box-sizing", 63: "break-after", 64: "break-before", 65: "break-inside", 66: "buffered-rendering", 67: "caption-side", 68: "caret-color", 69: "clear", 70: "clip", 71: "clip-path", 72: "clip-rule", 73: "color", 74: "color-interpolation", 75: "color-interpolation-filters", 76: "color-rendering", 77: "column-count", 78: "column-gap", 79: "column-rule-color", 80: "column-rule-style", 81: "column-rule-width", 82: "column-span", 83: "column-width", 84: "content", 85: "cursor", 86: "cx", 87: "cy", 88: "d", 89: "direction", 90: "display", 91: "dominant-baseline", 92: "empty-cells", 93: "fill", 94: "fill-opacity", 95: "fill-rule", 96: "filter", 97: "flex-basis", 98: "flex-direction", 99: "flex-grow", …}
// window.getComputedStyle(h1)[0]
// "align-content"
// window.getComputedStyle(h1).color
// "rgb(128, 128, 0)"
// window.getComputedStyle(h1).fontSize
// "32px"
// window.getComputedStyle(h1).fontFamily
// ""Times New Roman""
// window.getComputedStyle(h1).marginLeft
// 0px
// window.getComputedStyle(h1).fontFamily
// "21.44px 0px" top-bottom horizontal


