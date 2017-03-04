const rp = require('request-promise');
const fs = require('fs');

let data = fs.readFileSync('config.key');
let keys = JSON.parse(data);
let appKey = keys['Merrian-Webster'].key;

function getInfoTerm(term){
        return rp({
            method: 'GET',
            uri: 'http://www.dictionaryapi.com/api/references/medical/v2/xml/'+term+'?key='+ appKey,
            json: false,
            simple: true
        }).then((xml)=>{
            return Promise.resolve(xml);
        })
        .catch((err)=>{
            return Promise.reject(err);
        })
}

module.exports.getInfoTerm=getInfoTerm;