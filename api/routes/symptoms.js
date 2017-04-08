const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');


router.get('/', function (req, res) {
  fs.readFile('resources/list_symptoms.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Symptoms');
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
});

router.post('/', function (req, res) {
  if (!req.body.symptomId) {
    res.status(400).json({
      message: 'Symptom Id missing'
    })
    return;
  }

  db.insertSymptomsInfo(req.user.id, req.body.symptomId)
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
  if (!req.body.symptomId || !req.body.symptomDate) {
    res.status(400).json({
      message: 'Symptom Id or date missing'
    })
    return;
  }

  db.removeSymptomsInfo("58d803878cc7d319f0b3db47", req.body.symptomId, req.body.symptomDate)
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

  db.getSymptomsInfo(req.user)
  .then((symptoms => {
    res.json({
      symptoms:symptoms
    })
  }))
  .catch(()=>{
    res.sendStatus(500);
  })

})










module.exports = router;