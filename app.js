const express = require('express');
const app = express();
const https = require('https');

//our endpoint
app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=faa89fba0839c86f17b269d19bb6327c&units=imperial";

//request to the API
  https.get(url, (response) => {
    console.log(response.statusCode);

    //search through response data
    response.on('data', data =>{
  const weatherData = JSON.parse(data);
  const temp = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";

  res.write("<p>The weather is currently " + weatherDescription + "<p>");
  res.write("<p>The temperature in London is " + temp + " degrees. <p>");
  res.write("<img src=\"" + icon + "\">");
  res.send()
    });

  });


})

app.listen(3000, function(){
  console.log("Server is running on port 3000"
  );
})
