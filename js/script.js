window.addEventListener('DOMContentLoaded', () => {
    let greeting = document.querySelector('.greeting');

    let promis = () => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '../js/users.json');
            xhr.responseType = 'json';     
            xhr.send();

            xhr.addEventListener('load', () => {
                resolve(xhr.response);
            })
        })
    }

    promis().then(
        (response) => {
            greeting.innerHTML = `Здравствуйте ${response.name} ${response.surname}`;
            if(response.candle) {
                greeting.innerHTML += ` <br>Вы поставили свечку за ${response.candle['1']}`
            }
        }
)
})