
const baseURL = 'http://api.airvisual.com/v2/nearest_city?key=a53cc0d0-2710-4de7-a080-ebc8d109323c';
let url;

fetch(baseURL)
  .then(result => result.json())
  .then(json => {
      console.log(json);
      displayResults(json)
  });

 function displayResults(json) {
    let data = json

    let cityData = document.getElementById("cityData")
    let currentCity = document.getElementById("currentCity")
    let currentCountry = document.getElementById("currentCountry")

    currentCity = data.city
 }