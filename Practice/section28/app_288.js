// fetch('https://api.cryptonator.com/api/ticker/btc-usd') // returneaza a promise
//     .then(res => {
//         // console.log('RESPONSE ', res);
//         console.log('RESPONSE, WAITING TO PARSE... ', res);
//         // res.json().then()...
//         return res.json() // this returns a promise itself
//     })
//     .then(data => {
//         console.log("DATA PARSED...", data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e);
//     })
//     // cu toate ca o sa rezolve promise-ul cu succes, one thing annoying about
//     // fetch is that we don't actually have the data, just yet; we don't have it
//     // easily accesible
//     // what happens: fetch is actually going to resolve the promise, triggering our
//     // ".then" as soon as it receives the headers coming back from the API we passed!!
//     // So it doesn't wait to resolve. When all of the data is back, when everything is done .. n-am inteles aici
//     // As soon as it gets the first bit of the headers, fetch is going to resolve the promise
//     // AICI INTERVINE METODA "response.json()"
//     // it's still a little bit of work; we need to have multiple promises we're working with

// above: promisy function

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        // console.log(res);
        const data = await res.json();
        console.log(data.ticker.price);
    }
    catch (e) {
        console.log("something went wrong!!");
    }
}
// with async functions (adica varianta asta )