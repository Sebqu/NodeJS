const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engive', 'hbs');
app.get('/', (req, res) =>{
    res.render('home.hbs');
      
});  
app.get('/weather', (req, res) => { 
    var city = req.query.city; //mytext is the name of your input box
    res.send('Your Text:' +city); 
    console.log(city);
}); 






app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});