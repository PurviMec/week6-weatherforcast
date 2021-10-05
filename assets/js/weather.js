let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let futureDayWeatherEl = document.querySelector('#future-weather');
let currentWeatherEl = document.querySelector('#current-weather-data');
let cityNameEl = document.querySelector('#city-name');

const m = moment();
document.getElementById('currentDate').innerHTML = moment().format('l');  
document.getElementById('date1').innerHTML =  moment(moment(), "DD-MM-YYYY").add(1, 'days').format('l'); 
document.getElementById('date2').innerHTML =  moment(moment(), "DD-MM-YYYY").add(2, 'days').format('l'); 
document.getElementById('date3').innerHTML =  moment(moment(), "DD-MM-YYYY").add(3, 'days').format('l'); 
document.getElementById('date4').innerHTML =  moment(moment(), "DD-MM-YYYY").add(4, 'days').format('l'); 
document.getElementById('date5').innerHTML =  moment(moment(), "DD-MM-YYYY").add(5, 'days').format('l'); 

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
    let{timezone} = data;

    cityNameEl.innerHTML = 
    `
    <div class="current-weather-data">
        <div>
            <h3> ${timezone}<span id = "icon"></span></h3>
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
    <div class="current-weather-data">
        <div>UV Index: ${uvi}</div>
    </div>    
    `;
    

    
}



userFormEl.addEventListener('submit', searchButtonHandler);



