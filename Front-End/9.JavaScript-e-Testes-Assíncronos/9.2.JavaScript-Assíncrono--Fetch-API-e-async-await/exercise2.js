const coinsLocation = document.getElementById('coins');

const coins = () => {
    const url = 'https://api.coincap.io/v2/assets';
    return fetch(url)
    .then((response) => response.json())
    .then(( { data } ) =>  data.filter((first10) => first10.rank <= 10))
    .catch((error) => console.log(error));
}


const toBrl = async () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
    const usdEndpoint = `/currencies/usd.min.json`;
    const fullUrl = url.concat(usdEndpoint);

    return await fetch(fullUrl)
    .then((response) => response.json())
    .then(( { usd: { brl } }) => brl)
    .catch((error) => console.log(error));
}

const coinsInBrl = async () => {
    const coins10 = await coins();
    const dollarPrice = await toBrl();
    coins10.forEach(element => {
        const { name, symbol, priceUsd } = element;
        coinsLocation.innerText += `${name} ${symbol}: ${priceUsd * dollarPrice}
        `; 
    });
}

coinsInBrl();