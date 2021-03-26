const button = document.querySelector('#changeColorButton');
const container = document.querySelector('#container');

button.addEventListener('click', function () {
    container.style.backgroundColor = makeRandColor();
})

container.addEventListener('click', function (e) {
    // container.classList.add('hide');
    container.classList.toggle('hide'); // mai buna varianta cu toggle !!

    e.stopPropagation(); // asa facem stop la bubbling !! similar cu e.preventDefault() !!

});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}