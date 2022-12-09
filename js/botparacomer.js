
TELEGRAM_TOKEN = '5910102143:AAHE81AFi7y9kdtOfgLWRJpq7wSIjBVnhHg'
id = 1024202305
url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage'
setInterval(() => {
    const h = new Date().getHours();
    const m = new Date().getUTCMinutes();
    console.log(h, m)
    msj = "comer";
    if (h == 9 && m == 00) {
        console.log("Es la hora de desayunar")
        msj = 'Buenos dias mi vida, es hora de desayunar, LA ADORO MUCHOTE <3'
        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            return response.json();
        }

        postData(url, { 'chat_id': id, 'text': msj })
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        return msj
    }
    if (h == 12 && m == 00) {
        console.log("Es la hora de almrozar")
        msj = 'Buenas tatdes mi vida, es hora de Almorzar, LA ADORO MUCHOTE <3'
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

        postData(url, { 'chat_id': id, 'text': msj })
        .then((data) => {
          console.log(data);
        });
        return msj
    }
    if (h == 19 && m == 00) {
        console.log("Es la hora de Cenar")
        msj = 'Buenas noches mi vida, es hora de Cenar, LA ADORO MUCHOTE <3'
        async function postData(url = '', data = { 'chat_id': id, 'text': 'Buenos dias mi vida, es hora de Almorzar, LA ADORO MUCHOTE <3' }) {
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

        postData(url, { 'chat_id': id, 'text': msj })
        .then((data) => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        return msj
        return msj
    }
    console.log(msj)
}, 1000 * 60)