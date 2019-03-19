
var fs = require('fs');
var parse = require('csv-parse');

var namesDb = {};

module.exports = {
    verify: function (name) {

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
    },
    parseCSVToJSON: function () {
        var parser = parse({ delimiter: ',' }, function (err, data) {

            var _namesDb = {};
            data.forEach(element => {
                _namesDb[element[0].toUpperCase()] = element;
            })

            fs.exists('parsed-names.json', function (exists) {
                if (exists) {
                    console.log("parsed-names file exists");
                    fs.readFile('parsed-names.json', function readFileCallback(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            var json = JSON.stringify(_namesDb);
                            fs.writeFile('parsed-names.json', json);
                        }
                    });
                } else {
                    console.log("file not exists")
                    var json = JSON.stringify(_namesDb, null, '\t');
                    fs.writeFile('parsed-names.json', json, (e) => console.log(e));
                }
            });
        });

        // fs.createReadStream(__dirname + '/data/pt-br/ibge2010-names.csv').pipe(parser);
        // fs.createReadStream(__dirname + '/data/en-us/social-security-names.csv').pipe(parser);
        // fs.createReadStream(__dirname + '/data/custom-names.csv').pipe(parser);
    },
    init: function () {

        let supportedLangs = [
            'en-us',
            'pt-br',
            '../data' // For custom names
        ];

        for (var i = 0, len = supportedLangs.length; i < len; i++) {
            let lang = supportedLangs[i];
            let rawdata = fs.readFileSync(__dirname + `/data/${lang}/names.json`);
            namesDb = { ...namesDb, ...JSON.parse(rawdata) };
        }
    }
};