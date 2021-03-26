const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log('YOU CLICKED ME!');
    console.log('I HOPE IT WORKED!!');

}

function scream() {
    console.log('AAAAAAAAAaHHHHH')
    console.log('stop touching me!!')
}

btn.onmouseenter = scream; // !! atentie !! nu executam scream; doar dam o referinta la functie proprietatii ce apartine butonului... asta e delegare? nu cred..
// document.querySelector('h1.onclick') = alert('you clicked the h1') // la fel si aici !! asta nu functioneaza pentru ca execut functia inainte de a face asignarea !!

document.querySelector('h1').onclick = function () {
    alert('you clicked the h1')
}

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1 also!!')
} // !! atentie !! asta a doua suprascrie prima !!