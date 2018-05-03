const express = require('express');
const hbs = require('hbs');
const geolocation = require('./geolocation')
const weather = require('./weather')


const port = process.env.PORT || 3000;
var app = express();

    
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engive', 'hbs');

app.get('/', (req, res) =>{
    res.render('home.hbs', {
        err: undefined
    })
      
});  
app.get('/weather', (req, res) => { 
    var city = req.query.city; //mytext is the name of your input box
    geolocation.geoLocation (city, (err, result) =>{
        if(err){
            res.render('home.hbs', {
                err: `${err}.`
            })
        }else{
            res.render('weather.hbs',{
                pageTitle: city,


            })
        }
    });
});






app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});