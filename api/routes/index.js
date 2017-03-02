const express = require('express');
const infermedica = require('./infermedica');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('index');
});

router.get('/refresh_info',function(req,res){
    Promise.all([infermedica.getConditions(),infermedica.getLabTests(),infermedica.getRiskFactors(),infermedica.getSymptoms()])
    .then(()=>{
      res.sendStatus(200);
    })
    .catch(()=>{
      res.sendStatus(500);
    })
})

module.exports = router;
