let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let futureDayWeatherEl = document.querySelector('#future-weather');
let currentWeatherEl = document.querySelector('#current-weather-data');

const m = moment();  

    
$('#btn').on('click', function(event) {
    event.preventDefault();
    
    var name = document.querySelector("input[id='input-field']").value;
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=93712e51c9b96dd6f82b519a86a2a96b')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + response.coord.lat + '&lon=' + response.coord.lon +'&exclude=minutely,hourly&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b')
        .then(function(weather) {
            return weather.json(response);
        })
        .then(function(weather) {
            console.log(response);
            console.log(weather);
            saveCity();
            displayCity(name, weather);
            futureWeatherData(weather);
            
        })
    })
})

var saveCity = function(){
    var cityNameEl = document.querySelector("input[id='input-field']").value;
    localStorage.setItem('City', JSON.stringify(cityNameEl));
    displayCityData();
}

var displayCityData = function(){
    var getCityName = JSON.parse(localStorage.getItem('City'));
    displaySearch(getCityName);
}

var displaySearch = function(getCityName){
    var searchEl = document.querySelector("div[id='search-field']");
    var searchCityNameEl = $('<button></button>')
    .text(getCityName)
    .addClass('btn btn-secondary m-2 col-12')
    $(searchEl).append(searchCityNameEl);
    
    for (i = 0; i < searchCityNameEl.length; i++){
        cityNameBtn(searchCityNameEl, i);
    }
}

var displayCity = function(name, weather){
    let icon = weather.current.weather[0].icon;
    let today = window.moment().format('l');
    let searchCityEl = document.getElementById("city-date-icon");
    let geticonEl = document.getElementById('icon')

    var getCityEl = $('<span></span>')
    .text (name)
    .addClass('m-2')

    var getdayEl = $('<span></span>')
    .text (today)
    .addClass('m-2')
    
    
    geticonEl.innerHTML = `
    <span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span>
    `;

    let{temp, wind_speed, humidity, uvi} = weather.current;
    
    currentWeatherEl.innerHTML =
    
    `
    <div class="current-weather-data">
        <div>Temp: ${temp}</div>
    </div>    
    <div class="current-weather-data">
        <div>Wind: ${wind_speed}</div>
    </div>    
    <div class="current-weather-data">
        <div>Humidity: ${humidity}</div>
    </div>    
    <div class="current-weather-data" id="uvi">
        <div>UV Index: ${uvi}</div>
    </div>  
    
    `;
    
    
    $(searchCityEl).append(getCityEl, getdayEl);
}

var futureWeatherData = function(weather){
    for (i=0; i< weather.daily.length; i++){
        displayFuture (weather, i);
    }
}

var displayFuture = function (weather, i){
    let forcastDay1El = document.getElementById('date1');
    let forcastDay2El = document.getElementById('date2');
    let forcastDay3El = document.getElementById('date3');
    let forcastDay4El = document.getElementById('date4');
    let forcastDay5El = document.getElementById('date5');
    let {date, temp, wind_speed, humidity} = weather.daily[i];
    let icon = weather.daily[i].weather[0].icon;
    forcastDay1El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;

   forcastDay2El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(2, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;

   forcastDay3El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(3, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;

   forcastDay4El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(4, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;

   forcastDay5El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(5, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}


var cityNameBtn = function (searchCityNameEl, i){
    $(searchCityNameEl[i]).on('click', function(event) {
        event.preventDefault();
        //document.getElementById('date1').innerHTML= "";
        //document.getElementById('date2').innerHTML = "";
        //document.getElementById('date3').innerHTML = "";
        //document.getElementById('date4').innerHTML= "";
        //document.getElementById('date5').innerHTML = "";
        //$('#city-date-icon').html("");
        //document.getElementById('current-weather-data').innerHTML = "";
        
        var name = document.querySelector("input[id='input-field']").value;
   
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=93712e51c9b96dd6f82b519a86a2a96b')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + response.coord.lat + '&lon=' + response.coord.lon +'&exclude=minutely,hourly&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b')
            .then(function(weather) {
                return weather.json(response);
            })
            .then(function(weather) {
                console.log(response);
                console.log(weather);
                saveCity();
                displayCity(name, weather);
                futureWeatherData(weather);
                
            })
        })
    })
}
displayCityData();

                