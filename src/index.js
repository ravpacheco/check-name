var express = require('express');
var bodyParser = require('body-parser');
var VerifyService = require('./verifyService');

var app = express();

app.use(bodyParser.json()); // for parsing application/json

app.get('/verify/:name', function (req, res) {

    let name = req.params.name;
    console.log(name);

    if (!name) throw new Error('name property does not exist');
    res.send(VerifyService.verify(name));
});

app.post('/verify', function (req, res) {

    let name = req.body.name;
    console.log(name);

    if (!name) throw new Error('name property does not exist');
    res.send(VerifyService.verify(name));
});

app.post('/suggest', function (req, res) {
    let name = req.body.name;
    console.log(name);
    res.send();
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    VerifyService.init();
    console.log(`Express started on port ${port}`);
});