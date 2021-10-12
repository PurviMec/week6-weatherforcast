let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let futureDayWeatherEl = document.querySelector('#future-weather');
let currentWeatherEl = document.querySelector('#current-weather-data');

const m = moment();  

//let day1 = window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l');
//let day2 = window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l');
//let day3 = window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l');
//let day4 = window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l');
//let day5 = window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l');

//var getForecast = function() {

    //navigator.geolocation.getCurrentPosition((success) => {
         
        //let {latitude, longitude} = success.coords;
     
    //fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b`)
    //.then(function(response){
        //if (!response.ok){
            //error(ERROR)
        //}
         //return response.json();
    //})
    //.then(data => {
         //console.log(data);
        //displayData(data);
        //displayData1(data);
        //displayData2(data);
        //displayData3(data);
        //displayData4(data);
        //displayData5(data);
         
         
    //}).catch(error=>{
        //console.log(error);
    //});
    //})

//}
//getForecast();

//function displayData(data){
    //let{date} = data.current.weather[0];
    //let{timezone} = data
    //let icon = data.current.weather[0].icon;
    //cityNameEl.innerHTML = 
    //`
    //<div class="current-weather-data">
        //<div>
            //<h3> <div>${timezone}</div>
                //<span>  (${window.moment(date).format('l')})</span>
                //<span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span>
            //</h3>
        //</div>
    //</div> 
    //`;
    
    //let{temp, wind_speed, humidity, uvi} = data.current;
    
    //currentWeatherEl.innerHTML =
    
    //`
    //<div class="current-weather-data">
        //<div>Temp: ${temp}</div>
    //</div>    
    //<div class="current-weather-data">
        //<div>Wind: ${wind_speed}</div>
    //</div>    
    //<div class="current-weather-data">
        //<div>Humidity: ${humidity}</div>
    //</div>    
    //<div class="current-weather-data" id="uvi">
        //<div>UV Index: ${uvi}</div>
    //</div>  
    
    //`;
    
    

//}

//function displayData1(data){
    //let {date, temp, wind_speed, humidity} = data.daily[1];
    //let icon = data.daily[1].weather[0].icon;
    //forcastDay1.innerHTML = `
        //<div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l')}</h4></div>
        //<div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        //<div class="temp">Temp: ${temp.day}</div>
        //<div class="wind">Wind: ${wind_speed}</div>
       // <div class="humidity">Humidity: ${humidity}</div>
   //`;
//}

//function displayData2(data){
    //let {date, temp, wind_speed, humidity} = data.daily[2];
    //let icon = data.daily[2].weather[0].icon;
    //forcastDay2.innerHTML = `
        //<div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(2, 'days').format('l')}</h4></div>
        //<div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        //<div class="temp">Temp: ${temp.day}</div>
        //<div class="wind">Wind: ${wind_speed}</div>
        //<div class="humidity">Humidity: ${humidity}</div>
    //`;
//}

//function displayData3(data){
    //let {date, temp, wind_speed, humidity} = data.daily[3];
    //let icon = data.daily[3].weather[0].icon;
    //forcastDay3.innerHTML = `
        //<div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(3, 'days').format('l')}</h4></div>
        //<div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        //<div class="temp">Temp: ${temp.day}</div>
        //<div class="wind">Wind: ${wind_speed}</div>
        //<div class="humidity">Humidity: ${humidity}</div>
    ////`;
//}

//function displayData4(data){
    //let {date, temp, wind_speed, humidity} = data.daily[4];
    //let icon = data.daily[3].weather[0].icon;
    //forcastDay4.innerHTML = `
        //<div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(4, 'days').format('l')}</h4></div>
        //<div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        //<div class="temp">Temp: ${temp.day}</div>
        //<div class="wind">Wind: ${wind_speed}</div>
        ///<div class="humidity">Humidity: ${humidity}</div>
    //`;
//}

//function displayData5(data){
    //let {date, temp, wind_speed, humidity} = data.daily[5];
    //let icon = data.daily[3].weather[0].icon;
    //forcastDay5.innerHTML = `
        //<div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(5, 'days').format('l')}</h4></div>
        //<div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        //<div class="temp">Temp: ${temp.day}</div>
        //<div class="wind">Wind: ${wind_speed}</div>
        //<div class="humidity">Humidity: ${humidity}</div>
    //`;
//}

$('#btn').on('click', function(event) {
    event.preventDefault();
    
    var name = document.querySelector("input[id='input-field']").value;
   
    // call the weather api using the date and cityName (fetch)
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
            //$(name).html="";
            console.log(response);
            console.log(weather);
            saveCity();
            displayCity(name, weather);
            futureWeatherData(weather);
            //displayCity(getCityName);
            //displayCityData();
            
            //$('#forecast').empty();
            //displayWeather(weather, cityName, date);
        })
    })
});

var saveCity = function(){
    var cityNameEl = document.querySelector("input[id='input-field']").value;

    localStorage.setItem('City', JSON.stringify(cityNameEl));
    displayCityData();
}

var displayCityData = function(){
    
    var getCityName = JSON.parse(localStorage.getItem('City'));
    //console.log(getCityName);
    displaySearch(getCityName);
    
    
}

var displaySearch = function(getCityName){
    var searchEl = document.querySelector("div[id='search-field']");
    var searchCityNameEl = $('<h5></h5>')
    .text(getCityName)
    .addClass('card p-2 mt-2')
    $(searchEl).append(searchCityNameEl);
}

var displayCity = function(name, weather){
    //console.log(name);
    let icon = weather.current.weather[0].icon;
    let today = window.moment().format('l');
    let searchCityEl = document.getElementById("city-date-icon");
    let geticonEl = document.getElementById('icon')
    //let icon = response.weather;

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
    let forcastEl = document.getElementById('future-forcast');
    let {date, temp, wind_speed, humidity} = weather.daily[i];
    let icon = weather.daily[i].weather[0].icon;
    forcastEl.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
   `;
}

displayCityData();