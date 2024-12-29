const apiKey = 'b589b8e1125e16fdecfef3bed3dfc280';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        
        const cityName = document.querySelector('.city');
        const cityTemp = document.querySelector('.temp');
        const cityHumidity = document.querySelector('.humidity');
        const cityWindSpeed = document.querySelector('.wind');
        let weatherStyle = data.weather[0].main;

        cityName.textContent = data.name;
        cityTemp.textContent = Math.round(data.main.temp) + "°c";
        cityHumidity.textContent = data.main.humidity + "%";
        cityWindSpeed.textContent = data.wind.speed + " km/h";
        
        weatherIcon.src = `images/${weatherStyle}.png`;
        
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
    
}

searchBtn.addEventListener('click' , ()=> {
    checkWeather(searchBox.value);
})


