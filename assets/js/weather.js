var inputEl = document.querySelector('#input-field');
var onClickEl = document.querySelector('#btn');
var userFormEl = document.querySelector('#userForm');
var futureDayWeatherEl = document.querySelector('#future-weather');
var currentWeatherEl = document.querySelector('#current-weather-data');

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
            displayFuture(weather);
            displayFuture2(weather);
            displayFuture3(weather);
            displayFuture4(weather);
            displayFuture5(weather);
            document.querySelector("input[id='input-field']").value = '';
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
    .addClass('btn btn-secondary m-2 col-12 buttons')
    $(searchEl).append(searchCityNameEl);
    
    for (var i = 0; i < searchCityNameEl.length; i++){
        cityNameBtn(searchCityNameEl, i);
    }
}

var displayCity = function(name, weather){
    //var icon = weather.current.weather[0].icon;
    var today = window.moment().format('l');
    var searchCityEl = document.getElementById("city-date-icon");
    //let geticonEl = document.getElementById('icon');

    var getCityEl = $('<span></span>')
    .text (name)
    .addClass('m-2')

    var getdayEl = $('<span></span>')
    .text (today)
    .addClass('m-2')
    
    var{weather, temp, wind_speed, humidity, uvi} = weather.current;
    
    currentWeatherEl.innerHTML =
    
    `
    <span><img src = "http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"</span>
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

var displayFuture = function (weather){
    let forcastDay1El = document.getElementById('date1');
    let {temp, wind_speed, humidity} = weather.daily[1];
    let icon = weather.daily[1].weather[0].icon;
    forcastDay1El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(), "DD-MM-YYYY").add(1, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}

var displayFuture2 = function ( weather){
    let forcastDay2El = document.getElementById('date2');
    let {temp, wind_speed, humidity} = weather.daily[2];
    let icon = weather.daily[2].weather[0].icon;
    forcastDay2El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(), "DD-MM-YYYY").add(2, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}

var displayFuture3 = function ( weather){
    let forcastDay3El = document.getElementById('date3');
    let {temp, wind_speed, humidity} = weather.daily[3];
    let icon = weather.daily[3].weather[0].icon;
   forcastDay3El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(), "DD-MM-YYYY").add(3, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}

var displayFuture4 = function (weather){
    let forcastDay4El = document.getElementById('date4');
    let {temp, wind_speed, humidity} = weather.daily[4];
    let icon = weather.daily[4].weather[0].icon;
   forcastDay4El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(), "DD-MM-YYYY").add(4, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}

var displayFuture5 = function ( weather){
    let forcastDay5El = document.getElementById('date5');
    let {temp, wind_speed, humidity} = weather.daily[5];
    let icon = weather.daily[5].weather[0].icon;
   forcastDay5El.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(), "DD-MM-YYYY").add(5, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}


var cityNameBtn = function (searchCityNameEl, i){
    console.log(cityNameBtn);
    $(searchCityNameEl[i]).on('click', function(event) {
        event.preventDefault();
        document.getElementById('date1').innerHTML= "";
        document.getElementById('date2').innerHTML = "";
        document.getElementById('date3').innerHTML = "";
        document.getElementById('date4').innerHTML= "";
        document.getElementById('date5').innerHTML = "";
        $('#city-date-icon').html("");
        document.getElementById('current-weather-data').innerHTML = "";
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
                
                displayCity(name, weather);
                displayFuture(weather);
                displayFuture2(weather);
                displayFuture3(weather);
                displayFuture4(weather);
                displayFuture5(weather);
            })
        })
    })
}
displayCityData();

              