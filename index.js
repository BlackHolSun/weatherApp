let getResponse;
fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=faa89fba0839c86f17b269d19bb6327c&units=imperial", {
	"method": "GET",
	"headers": {

	}
})
.then(response => {
	getResponse= response;
	console.log(response);
})
.catch(err => {
	console.log(err);
});



//const weatherData = JSON.parse();
