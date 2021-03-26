// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {

    // form.preventDefault(); // !!ATENTIE!! preventDefault este pe obiectul de tip Event, nu pe obiectul de tip form!!
    event.preventDefault();

    console.log(this); // asta o sa fie eventul, I presume! NU!! ASTA E CONTEXTUL DIN CARE S-A CHEMAT ARROW FUNCTION-ul, which apparently is the Window object !!
    console.log(event);
    console.log(form);

    const quantityInput = form.elements.qty;
    const productInput = form.elements.product;
    // sau clasic:
    // const quantityInput = document.querySelector('#qty');
    // const productInput = document.querySelector('#product');

    const newLi = document.createElement('li');
    // newLi.textContent = // nu mai stiu exact diferenta de aici; asta parca includea textul exact asa cum e el, cu tot cu prostii de genul \n or smth, i dunno
    // VARIANTELE ASTEA NU MERG (un <li> nu are innerText, i suppose; vad cu console.dir(...) ca totusi are )
    // newLi.innerText = `${quantityInput.innerText} ${productInput.innerText}`; // ASTA CHIAR DC NU MERGE ?????????
    // newLi.innerText = quantityInput.innerText + ' ' + productInput.innerText;
    // newLi.append(`${quantityInput.innerText} ${productInput.innerText}`);
    // newLi.append(quantityInput.innerText + ' ' + productInput.innerText);
    // VARIANTELE ASTEA NU MERG
    newLi.innerText = quantityInput.value + ' ' + productInput.value;
    console.log(newLi);

    const ul = document.querySelector('#list');
    ul.append(newLi);

    quantityInput.value = '';
    productInput.value = '';

})

for (let li of document.querySelectorAll('li')) {
    // console.log(li)
    console.dir(li)
}