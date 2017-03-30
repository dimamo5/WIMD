const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');


router.get('/',function(req,res){
  fs.readFile('resources/list_lab_tests.json', function (err, data) {
    if (err) {
      console.log('Error Reading File with List of Lab Tests');
      res.sendStatus(500);
    } else {
      res.json(JSON.parse(data));
    }
  })
});












module.exports = router;