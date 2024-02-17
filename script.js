// Fetch the data from the API
fetch('https://api.dexscreener.com/latest/dex/tokens/78wz5WVzVuc9AssLsudgFZRV6SL7Yz2uVQiYX1yFaGF2')
  .then(response => response.json())
  .then(data => {
    const fdvValue = data.pairs[0].fdv;
    const pChange = data.pairs[0].priceChange.h24

    document.getElementById('pchange').innerText = pChange;

    document.getElementById('fdv').innerText = fdvValue;
  })
  .catch(error => {
    console.error('Error:', error);
  });
