const request = require('request');
const config = require('./config.json')
var getWeather = (lat, lng, callback) =>{
    request({
        json:true,
        url: `https://api.forecast.io/forecast/${config.forecastAPI}/${lat},${lng}`,
    },(err, res, body) => {
        if(err){
            callback("Unable to connect with servers");
        }
        else if (body === "Forbidden"){
            callback("Please fill up config with correct api key");
        }
        else if(body.error === "The given location (or time) is invalid."){
            callback("The given location is invalid");
         }
        else {
            callback(undefined,{
                currently:{
                    summary: body.currently.summary,
                    icon: body.currently.icon,
                    temperature: body.currently.temperature,
                    pressure: body.currently.pressure,
                    windSpeed: body.currently.windSpeed
                },
                tommorow:{
                    summary: body.daily.data[1].summary,
                    icon: body.daily.data[1].icon,
                    temperature: body.daily.data[1].temperatureHigh,
                    pressure: body.daily.data[1].pressure,
                    windSpeed: body.daily.data[1].windSpeed
                },
                twoDays: {
                    summary: body.daily.data[2].summary,
                    icon: body.daily.data[2].icon,
                    temperature: body.daily.data[2].temperatureHigh,
                    pressure: body.daily.data[2].pressure,
                    windSpeed: body.daily.data[2].windSpeed
                }

                
            });
        }
    });
};

module.exports.getWeather = getWeather;
