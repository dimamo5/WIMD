const libxmljs = require("libxmljs");

function parse(xmlData) {

    let xmlDoc = libxmljs.parseXml(xmlData);

    var entries = xmlDoc.get('//entry');

    if (entries == null) {
        console.log("no results");
        return null;
    }

    //console.log(entries.toString());

    try {
        //remove unnecessary info
        if(entries.get('.//ca') !== undefined)
            entries.get('.//ca').remove();
    }catch(err){
        console.log(err.toString());
    }

    let result = {
        term: entries.get('.//ew').text(),
        definition: entries.get('.//dt').text()
    };

    return result;
}


/*
 function parse(xmlData){

 let parser = new xml2js.Parser({explicitArray : false});
 let parseString = parser.parseString;

 parseString(xmlData, function (err, result) {
 //console.dir(result.entry_list.entry[0].def.sensb.sens.dt);

 let dataInJson = JSON.parse(JSON.stringify(result.entry_list.entry[0].def.sensb.sens.dt));
 var definition = "";

 //console.dir(JSON.stringify(result.entry_list.entry[0].def.sensb.sens.dt));

 console.log(JSON.stringify(result.entry_list.entry[0].def.sensb.sens.dt, null, 4));

 for(const prop of Object.keys(dataInJson)) {
 if(dataInJson.hasOwnProperty(prop))
 definition += dataInJson[prop];
 if(array.hasOwnProperty(prop)){
 definition += array[prop];
 }
 }

 // console.log(definition);
 //console.dir( result.entry_list.entry[0].def.sensb.sens.dt);
 });
 }*/

module.exports = {parse};