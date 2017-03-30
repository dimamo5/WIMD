const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const conditions = require('./conditions');
const riskfactors = require('./riskfactors');
const labtests = require('./labtests');
const symptoms = require('./symptoms');


/* GET home page. */
router.get('/', function (req, res) {
  res.send('WIMD');
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

router.use('/symptoms', symptoms);

router.use('/riskfactors', riskfactors)

router.use('/labtests', labtests)

router.use('/conditions', conditions)

module.exports = router;