const express = require('express');
//const infermedica = require('../request/infermedica');
//const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');

//insert
router.post('/', function (req, res) {

    if (!req.user.id || !req.body.medicalId) {
        res.status(400).json({
            message: 'Query param missing'
        });
        return;
    }

    db.insertRiskFactorsInfo(req.user.id, req.body.medicalId)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: err
            })
        })
});

router.delete('/', function (req, res) {

    if (!req.user.id || !req.body.riskFactorId) {
        res.status(400).json({
            message: 'Query param missing'
        });
        return;
    }

    db.removeRiskFactorInfo(req.user.id, req.body.riskFactorId)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: err
            })
        })
});

router.get('/', function (req, res) {

    if (!req.user.id) {
        res.status(400).json({
            message: 'User id missing'
        });
        return;
    }

    db.getRiskFactorsInfo(req.user.id)
        .then((riskfactors) => {
            res.json(riskfactors)
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});


module.exports = router;