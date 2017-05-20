const express = require('express');
const router = express.Router();
const conditions = require('./conditions');
const riskfactors = require('./riskfactors');
const labtests = require('./labtests');
const symptoms = require('./symptoms');
const info = require('./info');
const db = require('../database/query');



router.get('/', function (req, res) {
  db.getUser(req.user.id)
    .then(user =>{
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: err
      })
    })
});

router.post('/',function(req,res){
  if(!req.body.sex || !req.body.name || !req.body.age || !req.body.riskFactors){
    res.sendStatus(400);
  }

  db.updateInitInfo(req.user.id,req.body.name,req.body.sex,req.body.age,req.body.riskFactors)
  .then((response) =>{
    console.log(response);
    res.sendStatus(200);
  })
  .catch((err)=>{
    res.status(500).json({
      message:err
    })
  })
});

router.use('/info',info);

router.use('/symptoms', symptoms);

router.use('/riskfactors', riskfactors)

router.use('/labtests', labtests)

router.use('/conditions', conditions)

module.exports = router;