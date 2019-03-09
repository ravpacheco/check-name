var express = require('express');
var fs = require('fs');
var parse = require('csv-parse');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // for parsing application/json

var namesDb = {};

app.get('/verify/:name', function (req, res) {

    let name = req.params.name;
    console.log(name);
    res.send({ 'hi': 'hello world' });
});

app.post('/verify', function (req, res) {

    console.log(req.body);
    let name = req.body.name;
    console.log(name);
    res.send('Got a POST request')
  })

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Express started on port ${port}`);

    var parser = parse({ delimiter: ',' }, function (err, data) {
        
        data.forEach(element => {
            namesDb[element[0]] = element;   
        })
        console.log(namesDb['Nome']);
    });

    fs.createReadStream(__dirname + '/ibge2010-names.csv').pipe(parser);
});