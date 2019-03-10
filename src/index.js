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

    if (!name) throw new Error('name property does not exist');
    res.send(verifyName(name));
});

app.post('/verify', function (req, res) {

    let name = req.body.name;
    console.log(name);

    if (!name) throw new Error('name property does not exist');
    res.send(verifyName(name));
})

app.post('/suggest', function (req, res) {
    let name = req.body.name;
    console.log(name);
    res.send();
})

function verifyName(name) {

    let wordsCount = 0;
    let namesFound = [];

    // Tokenize the name
    name.split(' ').forEach(w => {

        let realW = w;
        //Remove special characters (like accents)
        w = w.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (namesDb[w.toUpperCase()]) {
            namesFound.push(realW);
        }
        wordsCount++;
    });

    return {
        name: name,
        score: namesFound.length / wordsCount,
        namesFound: namesFound
    }
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Express started on port ${port}`);

    var parser = parse({ delimiter: ',' }, function (err, data) {

        data.forEach(element => {
            namesDb[element[0]] = element;
        })
    });

    fs.createReadStream(__dirname + '/ibge2010-names.csv').pipe(parser);
});