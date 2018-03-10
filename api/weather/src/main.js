console.log("main.js is connected!");

let getWeatherAsJSON = url => {
  return fetch(url).then(response => response.json());
};

let displayWeather = () => {
  getWeatherAsJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=7612edd4a0c941f2e5078f8c82d6e4a3"
  ).then(json => {
    let weatherTemp = document.createElement("p");
    weatherTemp.innerHTML = json.main.temp;
    let weatherContainer = document.querySelector(".currentTemp");
    weatherContainer.appendChild(weatherTemp);
    let cityName = document.createElement("p");
    cityName.innerHTML = json.name;
    let nameContainer = document.querySelector(".cityName");
    nameContainer.appendChild(cityName);
    let minTemp = document.createElement("p");
    minTemp.innerHTML = json.main.temp_min;
    let minTempContainer = document.querySelector(".minTemp");
    minTempContainer.appendChild(minTemp);
    let maxTemp = document.createElement("p");
    maxTemp.innerHTML = json.main.temp_max;
    let maxTempContainer = document.querySelector(".maxTemp");
    maxTempContainer.appendChild(maxTemp);
  });
};
// displayWeather();

let searchButton = document.querySelector(".search");

searchButton.addEventListener("click", function() {
  event.preventDefault();
  let zipCode = document.querySelector(".zip").value;
  console.log(zipCode);
  console.log("clicked!");
  // searchButton.classList.add("hide-me");
  displayWeather();
});

/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
