const request = require('request');

var geoLocation = (adress, callback) =>{
    var encodedAddress = encodeURI (adress);
    request({
        json:true,
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
    },(err, res, body) => {
        if(err){
            callback('Unable to connect with servers');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('You have entired wrong address')
        }else if(body.status === 'OK'){
            callback(undefined,{ //undefined just to distinguish error with normal output
                fullAdress : body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                lng : body.results[0].geometry.location.lng
            });
        }
        else {
            callback('Unknown error');
        }
    
    });
};


module.exports.geoLocation = geoLocation;