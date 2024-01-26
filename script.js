fetch('https://year-qnet80bva-emjy-67ba5b66.vercel.app/whatyearisit-backend/year')
    .then(response => response.json())
    .then((data) => {
        document.querySelector('#year').textContent = data.year;
    });

