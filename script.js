let weather = {
    "apiKey" : "1aef8343a0506224be61a903b7730419",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey
           
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
    },
    displayWeather: function(data) {

    }
}