"use strict";

searchButton.addEventListener("click", () => {
  loadingText.style.display = "block";
  var cityName = searchCity.value;

  if (cityName.trim().length == 0) {
    return alert("Please enter a City Name");
  }

  var apiKey = "565b875a62773601c6ac25b89d141a61";
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric&appid=" +
    apiKey;

  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.send();

  request.onload = function () {
    if (request.responseText) {
      var data = JSON.parse(request.responseText);
      var weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      );
      weatherData.temperature = data.main.temp;
      updateWeather(weatherData);
    } else {
      alert("Something went wrong!");
    }
  };
});

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  loadingText.style.display = "none";
  weatherBox.style.display = "block";
}
