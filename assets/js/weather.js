var userFormEl = document.querySelector("#userForm");
var inputEl = document.getElementById("#input-field");

var onSubmit = function(event){
    event.preventDefault();
    console.log(event);

    var cityName = inputEl.ariaValueMax.trim();

    if(cityName) {
        getCityName(cityName);
        inputEl.value = "";
    }else {
        alert("Please choose a City Name");
    }
}
userFormEl.addEventListener("submit", onSubmit);
