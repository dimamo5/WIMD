const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const crypto = require('crypto');

// Connection URL
const url = 'mongodb://localhost:27017/WIMD';
let dbConn = {};

const LIMIT_ARRAY = 10;

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log("Erro connecting to MongoDB");
    } else {
        console.log("Connected successfully to server");
        dbConn = db;
    }

});

function login(mail, password) {
    var hashPass = crypto.createHash('sha256').update(password).digest('hex');

    const collection = dbConn.collection('auth');

    return collection.findOne({
        mail: mail,
        password: hashPass
    })
}

function register(password, mail) {
    var hashPass = crypto.createHash('sha256').update(password).digest('hex');

    const auth = dbConn.collection('auth');
    const users = dbConn.collection('users');

    return users.insertOne({
            name: "",
            age: null,
            gender: "",
            hasRegister: false,
            diagnostics: [],
            symptoms: [],
            conditions: [],
            riskFactors: [],
            labTests: []
        })
        .then((user) => {
            return auth.insertOne({
                _id: ObjectID(user.insertedId),
                password: hashPass,
                mail: mail
            })
        })
}

function getUser(id) {
    const users = dbConn.collection('users');
    return users.findOne({_id: ObjectID(id)},{fields: {symptoms:{$slice:LIMIT_ARRAY},riskFactors:0,conditions:{$slice: LIMIT_ARRAY},lab_tests:{$slice:LIMIT_ARRAY}, diagnostics:{$slice:LIMIT_ARRAY}}})
}


function updateInitInfo(userId,name,gender,age,riskfactors){
    const users = dbConn.collection('users');

    console.log(name,gender,age,riskfactors);

    return users.updateOne({_id: ObjectID(userId)}, {'name':name, 'age':age, 'gender':gender, 'riskFactors': riskfactors, 'hasRegister':true});
};

//Symptoms
function getSymptomsInfo(userId) {
    const users = dbConn.collection('users');

    return users.findOne({
        _id: ObjectID(userId)
    }, {
        fields: {
            symptoms: {
                $slice: LIMIT_ARRAY
            }
        }
    }).then((user) => {
        return user.symptoms;
    })
}

function insertSymptomsInfo(userId, medicalId,symptomDate) {
    const users = dbConn.collection('users');

    if(!symptomDate){
        symptomDate= Date.now();
    }

    return users.update({
        _id: ObjectID(userId)
    }, {
        $push: {
            symptoms: {
                id: medicalId,
                date: symptomDate
            }
        }
    })
}

function removeSymptomsInfo(userId, symptomId, symptomDate) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $pull: {
            symptoms: {
                $and: [{
                        id: symptomId
                    },
                    {
                        date: new Date(symptomDate)
                    }
                ]
            }
        }
    })
}

//Conditions
function getConditionsInfo(userId) {
    const users = dbConn.collection('users');

    return users.findOne({
        _id: ObjectID(userId)
    }, {
        fields: {
            conditions: 1
        }
    }).then((user) => {
        return user.conditions;
    })
}

function insertConditionsInfo(userId, medicalId) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $push: {
            conditions: {
                id: medicalId,
                present: true,
                date: new Date()
            }
        }
    })
}

function removeConditionsInfo(userId, conditionId) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $pull: {
            conditions: {
                id: conditionId
            }
        }
    })
}


//RiskFactors
function getRiskFactorsInfo(userId) {
    const users = dbConn.collection('users');

    return users.findOne({
        _id: ObjectID(userId)
    }, {
        riskfactors: 1
    }).then((user) => {
        return user.riskfactors;
    })
}

function insertRiskFactorsInfo(userId, medicalId) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $push: {
            riskfactors: {
                id: medicalId
            }
        }
    })
}

function removeRiskFactorInfo(userId, riskfactorId) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $pull: {
            riskfactors: {
                id: riskfactorId
            }
        }
    })
}


//LabTest
function getLabTestInfo(userId) {
    const users = dbConn.collection('users');

    return users.findOne({
        _id: ObjectID(userId)
    }, {
        fields: {
            labtests: 1
        }
    }).then((user) => {
        return user.conditions;
    })
}

function insertLabTestInfo(userId, medicalId,value) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $push: {
            labtests: {
                id: medicalId,
                value: value,
                date: new Date()
            }
        }
    })
}

function removeLabTestInfo(userId, labTestId, LabTestDate) {
    const users = dbConn.collection('users');

    return users.update({
        _id: ObjectID(userId)
    }, {
        $pull: {
            conditions: {
                $and: [{
                        id: conditionId
                    },
                    {
                        date: new Date(conditionDate)
                    }
                ]
            }
        }
    })
}

/*module.exports.login = login;
module.exports.register = register;
module.exports.insertSymptomsInfo = insertSymptomsInfo;
module.exports.removeSymptomsInfo = removeSymptomsInfo;
module.exports.getSymptomsInfo = getSymptomsInfo;*/
module.exports = {
    login,
    register,
    updateInitInfo,
    insertSymptomsInfo,
    removeSymptomsInfo,
    getSymptomsInfo,
    getUser,
    getConditionsInfo,
    insertConditionsInfo,
    removeConditionsInfo,
    getRiskFactorsInfo,
    insertRiskFactorsInfo,
    removeRiskFactorInfo,
    getLabTestInfo,
    insertLabTestInfo,
    removeLabTestInfo
}