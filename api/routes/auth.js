var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

    /* GET home page. */
router.post('/login', function (req, res) {
    var token = req.body.token || req.query.token || req.headers['Authorization'];
    var status = jwt.verify(token, 'superSecret');

    res.send(status);
});

router.post('/register', function (req, res) {
    var token = jwt.sign({foo:'bar'}, 'superSecret');
    res.send(token);
});



module.exports = router;