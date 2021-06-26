// multe chestii in consola in aceasta sectiune!!
// new keyword
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // this.rgb = function () {
    //     const { r, g, b } = this;
    //     return `rgb(${r}, ${g}, ${b})`;
    // };
    // if we do it like this, the we will have this function defined on the object still, rather than on the prototype
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgba = function (a = 1.0) { // !! ATENTIE: WE DO NOT WANT TO USE ARROW FUNCTIONS FOR THESE SCENARIOS; they behave different with the keyword "this" !!
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
}
// Aceeasi idee ca:
// Array.prototype.pop = function () {//overwrite the pop function
// }

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);
// color1.hex();
// color2.hex();
// !!tot ce am facut aici a fost ca sa avem o singura metoda pentru fiecare obiect de un anume prototip,
// nu copii ale aceleiasi metode pt fiecare obiect diferit 