const xml2js = require('xml2js');

function parse(xmlData){

    let parseString = xml2js.parseString;

    parseString(xmlData, function (err, result) {
        console.dir(result);
    });
}

module.exports = { parse };