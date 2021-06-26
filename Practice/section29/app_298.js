// // multe chestii in consola in aceasta sectiune!!
// // new keyword
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     // this.rgb = function () {
//     //     const { r, g, b } = this;
//     //     return `rgb(${r}, ${g}, ${b})`;
//     // };
//     // if we do it like this, the we will have this function defined on the object still, rather than on the prototype
// }


// //If you call it on its own like a regular function...
// Color(35, 60, 190); //undefined
// //It returns undefined. Seems useless!

// // *****************
// // THE NEW OPERATOR!
// // *****************
// // BUT CALLING IT WITH THE NEW OPERATOR PRODUCES A DIFFERENT OUTPUT:
// // new Color(value1, value2, value3)
// // 1. Creates a blank, plain JavaScript object;
// // 2. Links (sets the constructor of) this object to another object;
// // 3. Passes the newly created object from Step 1 as the this context;
// // 4. Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function (a = 1.0) { // !! ATENTIE: WE DO NOT WANT TO USE ARROW FUNCTIONS FOR THESE SCENARIOS; they behave different with the keyword "this" !!
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }
// // Aceeasi idee ca:
// // Array.prototype.pop = function () {//overwrite the pop function
// // }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);
// // color1.hex();
// // color2.hex();
// // !!tot ce am facut aici a fost ca sa avem o singura metoda pentru fiecare obiect de un anume prototip,
// // nu copii ale aceleiasi metode pt fiecare obiect diferit

// // pana aici 296
// // ce facem de acuma cu clase is just syntactic sugar for exactly what we did in 296.
// // main benefit: nu mai adaugam in prototype manual

class Color {
    constructor(r, g, b, name) {
        // console.log("inside constructor!");
        // console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL(); // adauga h,s,l
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() { // this se refera la instanta curenta a clasei !! the individual color object! nu la functie, nu la window, nu la prorotip!
        // const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`
    }
    gex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a = 1.0) {
        // const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    greet() {
        return `HELLO FROM ${this.name}!`;
        // echivalent cu "Color.prototrype = function(){ //code...}"
    }
    // toate metodele sunt adaugate la prototype automat!
    // PANA AICI 297.
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%,${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s},${l})`;
    }
    calcHSL() { // convert rgb to hsl (HUE SATURATION LIGHTNESS)
        let { r, g, b } = this; // nu folosim const pt ca schimbam r,g,b!!
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
        // return [h, s, l];
    }
    // "hsl(0-360,0-100%,0-100%)"
}

// const c1 = new Color(255, 67, 89, 'tomato');
// rgb(255, 67, 89);
// pt metode nu mai trebuie sa facem manual: Color.prototype
// const red = new Color();
const white = new Color(255, 255, 255, 'white');
// PANA AICI 297.

