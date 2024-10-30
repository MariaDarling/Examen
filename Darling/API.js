
document.getElementById('getWeather').onclick = function() {
    const city = document.getElementById('city').value;
    const apiKey = 'c530cfd9b9b94af28f232901243010';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `El clima en ${data.name} es ${data.weather[0].description} con una temperatura de ${data.main.temp}°C.`;
                document.getElementById('weatherResult').innerText = weather;
            } else {
                document.getElementById('weatherResult').innerText = 'Ciudad no encontrada.';
            }
        })
        .catch(error => console.error('Error:', error));
};
