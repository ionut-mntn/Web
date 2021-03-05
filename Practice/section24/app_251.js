// append, appendChild


// const newImg = document.createElement('img')
// undefined
// console.dir(newImg)
// VM266:1 imgaccessKey: ""align: ""alt: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "file:///E:/Web%20Development/Cursuri%20Udemy%20-%20parcurse%20or%20in%20progres/The%20Web%20Developer%20Bootcamp%202021/Web/Practice/section24/251.%20Append%20&%20AppendChild.html"border: ""childElementCount: 0childNodes: NodeList []children: HTMLCollection []classList: DOMTokenList [value: ""]className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0complete: truecontentEditable: "inherit"crossOrigin: nullcurrentSrc: ""dataset: DOMStringMap {}decoding: "auto"dir: ""draggable: trueelementTiming: ""enterKeyHint: ""firstChild: nullfirstElementChild: nullheight: 0hidden: falsehspace: 0id: ""innerHTML: ""innerText: ""inputMode: ""isConnected: falseisContentEditable: falseisMap: falselang: ""lastChild: nulllastElementChild: nullloading: "auto"localName: "img"longDesc: ""lowsrc: ""name: ""namespaceURI: "http://www.w3.org/1999/xhtml"naturalHeight: 0naturalWidth: 0nextElementSibling: nullnextSibling: nullnodeName: "IMG"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 0offsetLeft: 0offsetParent: nulloffsetTop: 0offsetWidth: 0onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<img>"outerText: ""ownerDocument: documentparentElement: nullparentNode: nullpart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: nullpreviousSibling: nullreferrerPolicy: ""scrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0shadowRoot: nullsizes: ""slot: ""spellcheck: truesrc: ""srcset: ""style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "IMG"textContent: ""title: ""translate: trueuseMap: ""vspace: 0width: 0x: 0y: 0__proto__: HTMLImageElement
// undefined
// newImg.src='https://uploads.sitepoint.com/wp-content/uploads/2019/04/1556504110pug.jpg'
// "https://uploads.sitepoint.com/wp-content/uploads/2019/04/1556504110pug.jpg"
// document.body.appendChild(newImg) // adauga ca ultim copil al body-ului
// <img src=​"https:​/​/​uploads.sitepoint.com/​wp-content/​uploads/​2019/​04/​1556504110pug.jpg">​
// newImg.classList.add('square')
// undefined
// const newH3=document.createElement('h3')
// undefined
// h3.innerText='I am new!'
// VM769:1 Uncaught ReferenceError: h3 is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM769:1
// newH3.innerText='I am new!'
// "I am new!"
// document.body.appendChild(newH3)
// <h3>​I am new!​</h3>​
// // mai este si obj.append(dar asta nu exista in Internet Explorer !!
// undefined
// const p = document.querySelector('p')
// undefined
// p.append('i am new text yaaaay!!!')
// undefined
// // se appenduieste la finalul paragrafului!! Deci in cadrul aceluiasi element !!
// undefined
// p.appendChild('i am new text yaaaay!!!')
// VM1411:1 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
//     at <anonymous>:1:3
// (anonymous) @ VM1411:1
// p.append('i am new text yaaaay!!!', 'asdasdasdasdasdasdasdasd') // putem appendui mai multe chestii
// undefined
// // when we append, we append to the insisde of the paragraph; la fel si cu appendChild; facem ceva the last child of the (in acest caz:) paragraph
// undefined
// const newB = document.createElement('b')
// undefined
// newB.append('Hi!') // putem face si asa in loc de innerText
// undefined
// newB
// <b>​Hi!​</b>​
// p.prepend(newB)
// undefined
// p
// <p>​…​</p>​<b>​Hi!​</b>​"The "<b>​Silkie​</b>​" (sometimes spelled "<b>​Silky​</b>​") is a "<a href=​"/​wiki/​List_of_chicken_breeds" title=​"List of chicken breeds">​breed​</a>​" of "<a href=​"/​wiki/​Chicken" title=​"Chicken">​chicken​</a>​" named for
//         its atypically fluffy "<a href=​"/​wiki/​Plumage" title=​"Plumage">​plumage​</a>​", which is said to feel like "<a href=​"/​wiki/​Silk" title=​"Silk">​silk​</a>​" and satin. The breed has several other unusual qualities, such as
//         black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are
//         often exhibited in "<a href=​"/​wiki/​Poultry" title=​"Poultry">​poultry​</a>​" shows, and appear in various colors. In
//         addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly
//         temperament. It is among the most docile of poultry. Hens are also exceptionally "<a href=​"/​wiki/​Broodiness" title=​"Broodiness">​broody​</a>​", and care for young well. Though they are fair layers themselves, laying only
//         about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their
//         broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,
//         should be handled with care.
//     ""i am new text yaaaay!!!""i am new text yaaaay!!!""asdasdasdasdasdasdasdasd"</p>​
// // daca vrem sa inseram ceva nu ca si copil, ci ca element adiacent:
// undefined
// const h2 = document.createElement('h2')
// undefined
// h.append("Are adorable chickens")
// VM2442:1 Uncaught ReferenceError: h is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM2442:1
// h2.append("Are adorable chickens")
// undefined
// h2
// <h2>​Are adorable chickens​</h2>​
// const h1 = document.querySelector('h1')
// undefined
// h1
// <h1>​Traversing Parent Child Sibling (relatives)​</h1>​
// h1.insertAdjacentElement('afterend', h2)
// <h2>​Are adorable chickens​</h2>​
// h1.nextElementSibling
// <h2>​Are adorable chickens​</h2>​
// const h3 = document.createElement('h3')
// undefined
// h3.innerText = 'I am h3';
// "I am h3"
// h1.after(h3)
// undefined
// // exista si ChildNode.before()
// undefined
// document.body.append('hello') // l-a adaugat tot la final (nu am mai verificat cu element inspector)
// undefined

// DIFERENTE ParentNode.append() si Node.appendChild()
// ParentNode.append()
// The ParentNode.append() method inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.

// Differences from Node.appendChild():

// ParentNode.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
// ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.