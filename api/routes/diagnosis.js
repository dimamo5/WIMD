const express = require('express');
const infermedica = require('../request/infermedica');
const router = express.Router();
const db = require('../database/query');
const util = require('util');



router.post('/', function (req, res) {
    db.getUser(req.user.id)
        .then((user) => {
            let evidence = formatEvidence(user);
            infermedica.diagnotics(user, evidence)
                .then((diagnoseRes) => {
                    db.insertDiagnose(req.user.id, evidence, diagnoseRes.conditions)
                        .then((diagnoseId) => {
                            diagnoseRes.id = diagnoseId
                            res.json(diagnoseRes);
                        })
                });
        })
})

router.post('/:id', function (req, res) {
    if (!req.body.answers) {
        res.sendStatus(400);
    }

    db.getDiagnoseEvidence(req.user.id, req.params.id)
        .then((user) => {
            console.log(user)
            return infermedica.diagnotics(user, user.diagnosis[0].evidence.concat(req.body.answers))
        })
        .then((diagnoseRes) => {
            db.updateDiagnose(req.user.id, req.params.id, diagnoseRes.conditions, req.body.answers)
            res.json(diagnoseRes)
        })
})

function formatEvidence(user) {
    let evidenceArray = [];
    //Risk Factors
    for (let riskfactor of user.riskFactors) {
        evidenceArray.push({
            id: riskfactor,
            choice_id: 'present'
        })
    }
    //Conditions
    for (let condition of user.conditions) {
        evidenceArray.push({
            id: condition.id,
            choice_id: condition.present ? 'present' : 'absent',
            //observed_at: condition.date
        })
    }

    //Symptoms
    for (let symptom of user.symptoms) {
        evidenceArray.push({
            id: symptom.id,
            choice_id: 'present',
            //observed_at: symptom.date
        })
    }
    return evidenceArray;
}

module.exports = router;