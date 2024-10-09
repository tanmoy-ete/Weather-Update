const apikey = "8a3ecf12cc687261f647819422b1c906";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchInput = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                document.querySelector(".details").style.display = "none";
            } else {
                const data = await response.json();
    

            document.querySelector(".city").innerHTML= data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
            document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "cloud.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "clean.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "mist.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "rain.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src= "snow.png";
    } else if(data.weather[0].main == "Haze"){
        weatherIcon.src= "haze.png";
    }

    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".details").style.display = "flex";
    document.querySelector(".error").style.display = "none";

            }
            
        }

        searchBtn.addEventListener("click" , ()=> {
        checkWeather(searchInput.value);
})
