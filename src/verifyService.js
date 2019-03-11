
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
    init: function () {
        var parser = parse({ delimiter: ',' }, function (err, data) {

            data.forEach(element => {
                namesDb[element[0]] = element;
            })
        });

        fs.createReadStream(__dirname + '/ibge2010-names.csv').pipe(parser);
    }
};