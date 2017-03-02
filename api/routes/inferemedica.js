const rp = require('request-promise');
const fs = require('fs');

let appId = '';
let appKey = '';
fs.readFile('../config.key', (err, data) => {
    if (err) {
        console.log('Error reading config file');
        process.exit(1);
        return;
    }
    let keys = JSON.parse(data);
    appId = keys.AppId;
    appKey = keys.AppKey;
})

function getConditions() {
    rp({
            method: 'GET',
            uri: 'https://api.infermedica.com/v2/conditions',
            headers: {
                'App-Id': appId,
                'App-Key': appKey
            },
            json: true,
            simple: true
        }).then((response) => {
            fs.writeFile('static/list_conditions', response, (err) => {
                if (err) {
                    return Promise.reject(err)
                }
                return Promise.resolve();
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

module.exports.getConditions=getConditions;