var x = document.getElementById("demo");
var latitude
var longitude
var URL
var city
var temp
var forecast


$(document).ready(function () {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
    
  }

  function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    x.innerHTML = "Latitude: " + latitude +
      "<br>Longitude: " + longitude;
      console.log(latitude,longitude);
  }
  getLocation();
  setTimeout(function weather() {
    // URL = 'https://fcc-weather-api.glitch.me/api/current?lat=51.5074&lon=0.1278';
    URL = 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude;
    

    $.getJSON(URL, function (data) {
      console.log(data);
      updateDOM(data);
    });
  }, 4000);

  // weather();

  function updateDOM(data) {
    city = data.name;
    temp = data.main.temp;
    forecast = data.weather[0].description;

    $('#city').html(city);
    $('#temp').html(temp);
    $('#forecast').html(forecast);
  }
  $('#currCity').click(function(){
  });
});


// По подразбиране и после ъпдеит.