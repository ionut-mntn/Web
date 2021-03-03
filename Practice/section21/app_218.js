const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
console.log(person.fullName());
// console.log(person.last);
person.last = "Plant";
console.log(person.fullName());
// =====================================================================
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        // console.log(color); // asta o sa imi zica: "color not defined"
        // console.log("MEOW MEOW MEOW MEOW " + this.name);
        console.log(this);
        console.log(`${this.name} says MEOWW`);
    }
}

const meow2 = cat.meow;
console.log("note the below difference:")
cat.meow(); // stie cine e "this"; este obiectul cat !!
meow2(); // "this" in cazul asta nu se mai refera la obiectul nostru; ci se refera la obiectul 'Window' --> the top level Object that everything lives inside of !! ("the root object" - cred)
// ============================================================================================================================================================================================
function scream() {
    console.log("AHHAHAHAHAH");
}
// pot accesa asta cu window.scream() !!! Window e un fel de Object din Java
// sau: window.alert()