
const baseURL = 'http://api.airvisual.com/v2/nearest_city?key=a53cc0d0-2710-4de7-a080-ebc8d109323c';
let url;

let latInp = document.getElementById("latitude")
let lonInp = document.getElementById("longitude")


const getUserLocation = () => {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(onPositionGathered, onPositionGatherError)
  } else {
    onPositionGatherError({ message: "Can't access location. Please enter your coordinates."})
  }
}

let onPositionGathered = (pos) => {
   let lat = pos.coords.latitude.toFixed(4)
   let lon = pos.coords.longitude.toFixed(4)

   latInp.value = lat
   lonInp.value = lon
}
let onPositionGatherError = e => {
  error.label.innerHTML = e.message
}

getUserLocation()

fetch(baseURL)
  .then(result => result.json())
  .then(json => {
      console.log(json);
      displayResults(json)
  });

 function displayResults(json) {
    let data = json
console.log(json.data.city)

    let dataContainer = document.getElementById("dataContainer")
 let currentCity = document.createElement("h4")
 let currentState = document.createElement("h4")
 let timeStamp = document.createElement("h4")
 let aqiValue = document.createElement("h4")
 let currentTemp = document.createElement("h4")
 let humidity = document.createElement("h4")
 let windSpeed = document.createElement("h4")
//  let icon = document.createElement("img")


currentCity.innerHTML = 'Current City: ' + json.data.city
currentState.innerHTML = 'Current State: ' + json.data.state
timeStamp.innerHTML = 'Current Time Stamp: ' + json.data.current.weather.ts
aqiValue.innerHTML = 'Current AQI Value: ' + json.data.current.pollution.aqius
currentTemp.innerHTML = 'Current Temperature (in Celsius): ' + json.data.current.weather.tp
humidity.innerHTML = 'Current Humidity: ' + json.data.current.weather.hu
windSpeed.innerHTML = 'Current Wind Speed: ' + json.data.current.weather.ws
// icon.src = json.data.current.weather.ic


 dataContainer.appendChild(currentCity);
 dataContainer.appendChild(currentState);
 dataContainer.appendChild(timeStamp);
 dataContainer.appendChild(aqiValue);
 dataContainer.appendChild(currentTemp);
 dataContainer.appendChild(windSpeed);
//  dataContainer.appendChild(icon);

 }

 let searchButton = document.getElementById("searchButton").addEventListener("click", userLocation);

 function userLocation () {
   console.log("is this working")
  parseFloat(latInp.value).toFixed(4), parseFloat(lonInp.value).toFixed(4)
 };

 