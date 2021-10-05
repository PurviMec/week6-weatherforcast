let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let futureDayWeatherEl = document.querySelector('#future-weather');
let currentWeatherEl = document.querySelector('#current-weather-data');
let cityNameEl = document.querySelector('#city-name');
let forcastDay1 = document.querySelector('#date1');
let forcastDay2 = document.querySelector('#date2');
let forcastDay3 = document.querySelector('#date3');
let forcastDay4 = document.querySelector('#date4');
let forcastDay5 = document.querySelector('#date5');

const m = moment();  

var getForecast = function() {

    navigator.geolocation.getCurrentPosition((success) => {
         
        let {latitude, longitude} = success.coords;
     
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b`)
    .then(function(response){
        if (!response.ok){
            error(ERROR)
        }
         return response.json();
    })
    .then(data => {
         console.log(data);
        displayData(data);
        displayData1(data);
        displayData2(data);
        displayData3(data);
        displayData4(data);
        displayData5(data);
         
         
    }).catch(error=>{
        console.log(error);
    });
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

function displayData(data){
    let{date} = data.current.weather[0];
    let{timezone} = data
    let icon = data.current.weather[0].icon;
    cityNameEl.innerHTML = 
    `
    <div class="current-weather-data">
        <div>
            <h3> <div>${timezone}</div>
                <span>  (${window.moment(date).format('l')})</span>
                <span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span>
            </h3>
        </div>
    </div> 
    `;
    
    let{temp, wind_speed, humidity, uvi} = data.current;
    
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
    
    UVIndex = $('#uvi').value.trim();
    if (UVIndex <= 2.5){
        UVIndex.className="low";
    } else if(UVIndex >=2.6 && UVIndex <= 5){
        UVIndex.className = "moderate";
    }else {
        UVIndex.className = "high";
    }
    `;
    
    

}

function displayData1(data){
    let {date, temp, wind_speed, humidity} = data.daily[1];
    let icon = data.daily[1].weather[0].icon;
    forcastDay1.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(1, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
    `;
}

function displayData2(data){
    let {date, temp, wind_speed, humidity} = data.daily[2];
    let icon = data.daily[2].weather[0].icon;
    forcastDay2.innerHTML = `
        <div class="date" id="date1"><h4${window.moment(moment(date), "DD-MM-YYYY").add(2, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
    `;
}

function displayData3(data){
    let {date, temp, wind_speed, humidity} = data.daily[3];
    let icon = data.daily[3].weather[0].icon;
    forcastDay3.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(3, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
    `;
}

function displayData4(data){
    let {date, temp, wind_speed, humidity} = data.daily[4];
    let icon = data.daily[3].weather[0].icon;
    forcastDay4.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(4, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
    `;
}

function displayData5(data){
    let {date, temp, wind_speed, humidity} = data.daily[5];
    let icon = data.daily[3].weather[0].icon;
    forcastDay5.innerHTML = `
        <div class="date" id="date1"><h4>${window.moment(moment(date), "DD-MM-YYYY").add(5, 'days').format('l')}</h4></div>
        <div><span><img src = "http://openweathermap.org/img/wn/${icon}@2x.png"</span></div>
        <div class="temp">Temp: ${temp.day}</div>
        <div class="wind">Wind: ${wind_speed}</div>
        <div class="humidity">Humidity: ${humidity}</div>
    `;
}



userFormEl.addEventListener('submit', searchButtonHandler);



