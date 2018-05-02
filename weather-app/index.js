const geolocation = require ('./geolocation.js');
const weather = require('./weather.js');

geolocation.geoLocation ("przemysl",(error, result)=>{
    if(error){
        console.log(error);
    }else if(result){
        weather.getWeather(result.lat, result.lng, (err, result) => {
            if(err){
                console.log(error);
            }else if(result){
                console.log(result);
            }else{
                console.log("unknown error");
            }
        });
    }
    else{
        console.log("Unknown error");
    }
});