let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let futureDayWeatherEl = document.querySelector('#future-weather');
let currentWeatherEl = document.querySelector('#current-weather-data');

//const m = moment();  
//let today = window.moment(date).format('l');
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
            $('#cityName').empty();
            console.log(response);
            console.log(weather);
            saveCity();
            displayCity();
            //$('#forecast').empty();
            //displayWeather(weather, cityName, date);
        })
    })
});

var saveCity = function(i){
    cityNameEl = document.querySelector("input[id='input-field']").value;
    for(i = 0; i = cityNameEl.length; i++){
    localStorage.setItem('City', JSON.stringify(cityNameEl));
    }
}

var displayCityData = function(){
    
    console.log(getCityName);
    
        var getCityName = JSON.parse( localStorage.getItem('City'))
    
}

var displayCity = function(city, response){
    //console.log(response);
    let cityNameEl = document.querySelector('#cityName');
    //let {icon} = response.weather;
    let today = window.moment().format('l');
    var getCityEl = $('<h3></h3>')
    .text (city)
    .addClass('m-2')

    var getdayEl = $('<h3></h3>')
    .text (today)
    .addClass('m-2')

    //cityNameEl.innerHTML = 
    //`<span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span>`;

    //var conditionsEl = $('<img>')
    //.attr('src', 'https://openweathermap.org/img/wn/' + weather.current.weather[0].icon + '@2x.png')
    //.attr('alt', weather.current.weather[0].main);
    
    $(cityNameEl).append(getCityEl, getdayEl);
}


displayCityData();