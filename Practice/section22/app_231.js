const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    // fullName: function () {
    //     return `${this.firstName} - ${this.lastName}`
    // }

    fullName: () => {
        console.log(this);
        return `${this.firstName} - ${this.lastName}`
        // !! INSIDE OF AN ARROW FUNCTION, THE KEYWORD 'this' IS GOING TO REFER TO THE SCOPE
        // THAT IT(THE ARROW FUNCTION, i suppose) WAS CREATED IN !!  
        // in acest caz, "this" se refera la obiectul "Window" !!

        // deci cand executia o sa ajunga la linia 10 (return `${this.firstName} - ${this.lastName}`)
        // this.firstName va fi echivalent cu Window.firstName !!
        // Nu il va gasi, so it gets the value undefined!!
    },
    shoutName: function () {

        // setTimeout(function () {
        setTimeout(() => { // dar asa o sa mearga !!

            console.log(this);
            // dc si aici ar fi Window the scope that created this function??
            // raspuns: "it has to do with the execution context;
            // raspuns: setTimeout este o metoda a obiectului "Window") 
            // raspuns: pt ca inside of setTimeout() the execution context
            console.log(this.fullName());
        }, 3000)
    }
}