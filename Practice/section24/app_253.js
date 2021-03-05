// // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// for (let i = 0; i < 100; i++) {
//     const newImg = document.createElement('img'); // oare da eroare aici? dc nu da eroare aici?
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
//     // alternativ: newImg.src = `${baseURL}${i}.png` // (retineam mai sus undeva intr o variabila url-ul de baza)

//     // container.appendChild(newImg); // asta primeste un singur parametru!!
//     // container.append(newImg); // vad ca merge si cu append !! append pare mai versatil
//     newImg.src
// }

// <div>
//     <img>
//         <span>2</span>
// </div>


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container');
for (let i = 1; i <= 151; i++) {
    console.log("merge");
    const pokemon = document.createElement('div');  // prolly ca la fiecare iteration-end dispare variabila, iar cand apare o noua iteratie, o recreem !!
    // const pokemon = document.createElement('div[bgcolor="red"');
    // const pokemon = document.createElement('div[display="inline"]');
    // pokemon.style.display = 'inline-block';
    // SAU direct in CSS !
    pokemon.classList.add('pokemon')

    // const label = document.createElement('label'); // de incercat si asa !! cum fac cu ID-urile? e problema buna de gandit!
    const span = document.createElement('span'); // de incercat si asa !!
    // span.innnerText = i; // conversie automata aici
    //sau:
    span.innerText = `#${i}` // posibil sa nu mai trebuiasca ecape la hash tag aici

    const newImg = document.createElement('img'); // oare da eroare aici? dc nu da eroare aici?
    newImg.src = `${baseURL}${i}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(span);
    container.appendChild(pokemon);
}

{/* <div>
    <img>
        <span>2</span>
</div> */}
