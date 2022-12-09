
TELEGRAM_TOKEN = '5910102143:AAHE81AFi7y9kdtOfgLWRJpq7wSIjBVnhHg'
id = 1159927134
url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage'


setInterval(()=>{
  const h = new Date().getHours();
  const m = new Date().getUTCMinutes();
  console.log(h, m)
  msj = "comer";
  async function postData(url = '', data = { 'chat_id': id, 'text': '' }) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    });
    return response.json();
}

postData(url, { 'chat_id': id, 'text': 'Oiga, Dice Erick que la adora muchote' })
.then((data) => {
  console.log(data);
});

},1000*2)
