function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batman'];
    function cryForHelp() {
        let color = 'purple'; // !! asta nu e vizibila in bankRobbery !!
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}

// bankRobbery().cryForHelp();
// cryForHelp();
bankRobbery();