const express = require('express');
//const infermedica = require('../request/infermedica');
//const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');

//insert
router.post('/', function (req, res) {

    if(!req.user.id || !req.body.medicalId || !req.body.value){
        res.status(400).json({
            message: 'Query param missing'
        });
        return;
    }

    db.insertLabTestInfo(req.user.id, req.body.medicalId,req.body.value)
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

    if (!req.user.id || !req.body.labTestId || !req.body.labTestDate) {
        res.status(400).json({
            message: 'Query param missing'
        });
        return;
    }

    db.removeLabTestInfo(req.user.id, req.body.labTestId, req.body.labTestDate)
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

    db.getLabTestInfo(req.user.id)
        .then((labtests) => {
            res.json(labtests)
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

module.exports = router;