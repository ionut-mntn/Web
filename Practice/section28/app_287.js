const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!");
    // console.log(this);
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("error!!!")
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.open('GET', 'https://api.cryptdddddonator.com/api/ticker/btc-usd')
req.send();