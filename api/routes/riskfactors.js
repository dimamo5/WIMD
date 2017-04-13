const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');


router.post('/', function (req, res) {
    if (!req.body.labtestsId) {
        res.status(400).json({
            message: 'Risk Factor Id missing'
        })
        return;
    }

    db.insertLabTestInfo(req.user.id, req.body.labtestsId)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: err
            })
        })

})

router.delete('/', function (req, res) {
    if (!req.body.labtestsId || !req.body.labtestsDate) {
        res.status(400).json({
            message: 'labtests Id or date missing'
        })
        return;
    }

    db.removelabtestssInfo(req.user.id, req.body.labtestsId, req.body.labtestsDate)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                message: err
            })
        })
})

router.get('/', function (req, res) {

    db.getSymptomsInfo(req.user.id)
        .then((symptoms) => {
            res.json(symptoms)
        })
        .catch((err) => {
            res.sendStatus(500);
        })
})







module.exports = router;