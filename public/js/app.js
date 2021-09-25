console.log('Client side javascript file is loaded!');

const form = document.querySelector('form');
const input = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    message1.textContent = 'Loading';
   
    const location = input.value;
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            message1.textContent = data.location;
            message2.textContent = data.latitude + ' ' + data.longitude;
        })
    })
})


