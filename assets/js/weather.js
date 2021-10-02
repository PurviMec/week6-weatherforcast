let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let todaysWeatherEl = document.querySelector('#todays-weather');
let futureDayWeatherEl = document.querySelector('#future-weather');




var getForecast = function(city) {

    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=93712e51c9b96dd6f82b519a86a2a96b";
    var dailyUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.15&lon=-79.24&exclude=hourly,current,minutely&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b";
    
    fetch(dailyUrl).then(function(response){
         return response.json();
    })
    .then(function(data){
        
        console.log(data);

    })
    
}
getForecast();

var searchButtonHandler = function(event){
    event.preventDefault();
  console.log(event);

    var cityName = inputEl.value.trim();

    if (cityName) {
        getForecast(cityName);
        inputEl.value = "";
    } else {
        alert("Please provide valid city name");
    }

};

var displayData = function(){
    document.getElementById('todays-weather').innerHTML(data);
}

userFormEl.addEventListener('submit', searchButtonHandler);



