const rp = require('request-promise');
const fs = require('fs');
//require('request-debug')(rp);

let data = fs.readFileSync('config.key');
let keys = JSON.parse(data);
let appId = keys.Infermedica.AppId;
let appKey = keys.Infermedica.AppKey;

function getConditions() {
    return rp({
            method: 'GET',
            uri: 'https://api.infermedica.com/v2/conditions',
            headers: {
                'App-Id': appId,
                'App-Key': appKey
            },
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function (resolve, reject) {
                fs.writeFile('resources/list_conditions.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

function getLabTests() {
    return rp({
            method: 'GET',
            uri: 'https://api.infermedica.com/v2/lab_tests',
            headers: {
                'App-Id': appId,
                'App-Key': appKey
            },
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function (resolve, reject) {
                fs.writeFile('resources/list_lab_tests.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

function getRiskFactors() {
    return rp({
            method: 'GET',
            uri: 'https://api.infermedica.com/v2/risk_factors',
            headers: {
                'App-Id': appId,
                'App-Key': appKey
            },
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function (resolve, reject) {
                fs.writeFile('resources/list_risk_factors.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

function getSymptoms() {
    return rp({
            method: 'GET',
            uri: 'https://api.infermedica.com/v2/symptoms',
            headers: {
                'App-Id': appId,
                'App-Key': appKey
            },
            json: true,
            simple: true
        }).then((response) => {
            return new Promise(function (resolve, reject) {
                fs.writeFile('resources/list_symptoms.json', JSON.stringify(response), (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response)
                    }
                })
            })
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

function diagnotics(user,evidenceArray) {
    let content = {
        sex: user.gender === 'M' ? 'male' : 'female',
        age: user.age,
        evidence:evidenceArray
    };
    console.log(content);
    return rp({
        method: 'POST',
        uri: 'https://api.infermedica.com/v2/diagnosis',
        headers: {
            'App-Id': appId,
            'App-Key': appKey
        },
        body: content,
        json: true,
        simple: true
    })
}

module.exports = {
    getConditions,
    getLabTests,
    getRiskFactors,
    getSymptoms,
    diagnotics
}