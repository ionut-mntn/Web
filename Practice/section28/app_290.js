// // fetch('https://api.cryptonator.com/api/ticker/btc-usd') // returneaza a promise
// // //     .then(res => {
// // //         // console.log('RESPONSE ', res);
// // //         console.log('RESPONSE, WAITING TO PARSE... ', res);
// // //         // res.json().then()...
// // //         return res.json() // this returns a promise itself
// // //     })
// // //     .then(data => {
// // //         console.log("DATA PARSED...", data);
// // //         console.log(data.ticker.price);
// // //     })
// // //     .catch(e => {
// // //         console.log("OH NO! ERROR!", e);
// // //     })
// // //     // cu toate ca o sa rezolve promise-ul cu succes, one thing annoying about
// // //     // fetch is that we don't actually have the data, just yet; we don't have it
// // //     // easily accesible
// // //     // what happens: fetch is actually going to resolve the promise, triggering our
// // //     // ".then" as soon as it receives the headers coming back from the API we passed!!
// // //     // So it doesn't wait to resolve. When all of the data is back, when everything is done .. n-am inteles aici
// // //     // As soon as it gets the first bit of the headers, fetch is going to resolve the promise
// // //     // AICI INTERVINE METODA "response.json()"
// // //     // it's still a little bit of work; we need to have multiple promises we're working with

// // // above: promisy function

// // const fetchBitcoinPrice = async () => {
// //     try {
// //         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// //         // console.log(res);
// //         const data = await res.json();
// //         console.log(data.ticker.price);
// //     }
// //     catch (e) {
// //         console.log("something went wrong!!");
// //     }
// // }
// // // with async functions (adica varianta asta )

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')//;
//     // scriind asta de deasupra in consola, obs ca promise-ul returnat este resolved
//     // are deja datele parsed inside of it; we didn't have to deal with any json parsing
//     // chain multiple ".then"s as with fetch
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!", err);
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         // 
//     }
// }

// // deci diff dintre varianta cu axios si varianta cu fetch este ca in varianta de deasupra(din 288.) -cea cu fetch-
// // facem prima data un fetch call - asta returneaza a promise, but this promise is resolved with
// // what is basically an incomplete response object. 
// // !!Data is still coming in; it's not been parsed!!
// // Iar apoi we have to call res.json() care returneaza another promise dupa care trebuie sa asteptam for it to be finished..
// // so it's just an extra step

// // Axios does it all for us at once. We just await one thing or we have one ".then" and we get this nice response that has 
// // everything in it.
// // REMEMBER: IT DOESN'T DO ANYTHING WE COULDN'T DO BEFORE!!

// const jokes = document.querySelector('#jokes');
// const getDadJoke = async () => {
//     // const res = await axios.get('https://icanhazdadjoke.com/') // cu asta primim html inapoi in data

//     // const headers = { headers: { Accept: 'application/json', } } 
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get('https://icanhazdadjoke.com/', config); // cu asta primim JSON inapoi in data
//     // console.log(res);
//     console.log(res.data.joke);

//     const newLI = document.createElement('LI');
//     newLI.append(res.data.joke);
//     jokes.append(newLI);
// }

// const newJokeBtn = document.querySelector('#newJokeBtn');
// newJokeBtn.addEventListener('click', getDadJoke);

const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    // console.log(jokeText);
    const newLI = document.createElement('LI');
    // newLI.append(res.data.joke);
    // jokes.append(newLI);
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // const res = await axios.get('https://icanhazdaSDdjoke.com/', config);
        return res.data.joke;
    }
    catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
}