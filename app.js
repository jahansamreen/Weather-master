const getWeather = (city) => {
  if (city == "") {
    swal("Error!", "Please Enter City!", "error");
  }
  cityName.innerHTML = city;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49da7703b2d50bab507896f3d5b56a7c`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      country.innerHTML = response.sys.country;
      temp.innerHTML = (response.main.temp - 273.15).toFixed(1);
      sunrise.innerHTML = response.sys.sunrise;
      sunset.innerHTML = response.sys.sunset;
      min_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      max_temp.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      main.innerHTML = response.weather[0].main;
      description.innerHTML = response.weather[0].description;
      let locationIcon = document.querySelector(".weather-icon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
      wind.innerHTML = response.wind.deg;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


getWeather("Delhi");



const Shanghai = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Shanghai&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      ShanghaiName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      ShanghaiMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      ShanghaiMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      ShanghaiFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Shanghailon.innerHTML = response.coord.lon;
      Shanghailat.innerHTML = response.coord.lat;
      ShanghaiSunrise.innerHTML = response.sys.sunrise;
      ShanghaiSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("ShanghaiIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Shanghai();



const Boston = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      BostonName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      BostonMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      BostonMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      BostonFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Bostonlon.innerHTML = response.coord.lon;
      Bostonlat.innerHTML = response.coord.lat;
      BostonSunrise.innerHTML = response.sys.sunrise;
      BostonSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("BostonIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Boston();



const Lucknow = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      LucknowName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      LucknowMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      LucknowMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      LucknowFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Lucknowlon.innerHTML = response.coord.lon;
      Lucknowlat.innerHTML = response.coord.lat;
      LucknowSunrise.innerHTML = response.sys.sunrise;
      LucknowSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("LucknowIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Lucknow();




const Kolkata = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=49da7703b2d50bab507896f3d5b56a7c"
  )
    .then((response) => response.json())
    .then((response) => {
      KolkataName.innerHTML = (response.main.temp - 273.15).toFixed(1);
      KolkataMax.innerHTML = (response.main.temp_max - 273.15).toFixed(1);
      KolkataMin.innerHTML = (response.main.temp_min - 273.15).toFixed(1);
      KolkataFeels.innerHTML = (response.main.feels_like - 273.15).toFixed(1);
      Kolkatalon.innerHTML = response.coord.lon;
      Kolkatalat.innerHTML = response.coord.lat;
      KolkataSunrise.innerHTML = response.sys.sunrise;
      KolkataSunset.innerHTML = response.sys.sunset;
      main.innerHTML = response.weather[0].main;
      let locationIcon = document.getElementById("KolkataIcon");
      const { icon } = response.weather[0];
      locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png"/>`;
    })
    .catch((err) => console.error(err));
};

Kolkata();

