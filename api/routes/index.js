const express = require('express');
const infermedica = require('./infermedica');
const mw = require('./merrian_webster');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  res.send('index');
});

router.get('/refresh_info', function (req, res) {
  Promise.all([infermedica.getConditions(), infermedica.getLabTests(), infermedica.getRiskFactors(), infermedica.getSymptoms()])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    })
})

router.get('/symptoms', function (req, res) {
  fs.readFile('resources/list_symptoms.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Symptoms');
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
})

router.get('/riskfactors', function (req, res) {
  fs.readFile('resources/list_risk_factors.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Risk Factors');
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
})

router.get('/labtests', function (req, res) {
  fs.readFile('resources/list_lab_tests.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Lab Tests');
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
})

router.get('/conditions', function (req, res) {
  fs.readFile('resources/list_conditions.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Conditions', err);
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
})

router.get('/info', function (req, res) {
  if (req.query.s) {
    mw.getInfoTerm(req.query.s)
      .then((data) => {
        //call function to parse the XML and output only the necessary thing
        res.json(data);
      })
      .catch((err) => {
        console.log('Error geting the medical information');
        res.sendStatus(500);
      })
  }
})

module.exports = router;