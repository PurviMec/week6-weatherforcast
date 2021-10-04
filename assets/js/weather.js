let inputEl = document.querySelector('#input-field');
let onClickEl = document.querySelector('#btn');
let userFormEl = document.querySelector('#userForm');
let todaysWeatherEl = document.querySelector('#todays-weather');
let futureDayWeatherEl = document.querySelector('#future-weather');

const m = moment();
document.getElementById('city-name').innerHTML = moment().format('l');  
document.getElementById('date1').innerHTML =  moment(moment(), "DD-MM-YYYY").add(1, 'days').format('l'); 
document.getElementById('date2').innerHTML =  moment(moment(), "DD-MM-YYYY").add(2, 'days').format('l'); 
document.getElementById('date3').innerHTML =  moment(moment(), "DD-MM-YYYY").add(3, 'days').format('l'); 
document.getElementById('date4').innerHTML =  moment(moment(), "DD-MM-YYYY").add(4, 'days').format('l'); 
document.getElementById('date5').innerHTML =  moment(moment(), "DD-MM-YYYY").add(5, 'days').format('l'); 


var getForecast = function(lat, long) {

    
    var dailyUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.159374&lon=-79.246864&exclude=hourly,current,minutely&units=metric&appid=93712e51c9b96dd6f82b519a86a2a96b";
     
    fetch(dailyUrl).then(function(response){
        if (!response.ok){
            error(ERROR)
        }
         return response.json();
    })
    .then(data => {
         console.log(data.daily[0]);

         const html = data.daily.map(daily => {
             return `<p>Temp: ${daily.temp.day}°C</P>
             <p>Wind: ${daily.wind_speed}MPH</P>
             <p>Humidity: ${daily.humidity}%</P>
             <p class = 'status_data'>UV Index: ${daily.uvi}</P>
             `
             
         }).join(''); 
         console.log(html);
         document.querySelector('#current-weather-data').innerHTML = html;
        
         
    }).catch(error=>{
        console.log(error);
    });
    

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





userFormEl.addEventListener('submit', searchButtonHandler);



