const express = require('express');
const router = express.Router();
const db = require('../database/query');

router.get('/', function (req, res) {
    if (!req.user.id) {
        res.status(400).json({
            message: 'User id missing'
        });
        return;
    }

    db.getBasicInfo(req.user.id)
        .then((info) => {
            res.json(info);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// create/edit
router.post('/', function (req, res) {

    if (!req.user.id) {
        res.status(400).json({
            message: 'User id missing'
        });
        return;
    }

    db.updateBasicInfo(req.user.id, req.body.name, req.body.birthdate, req.body.gender)
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

module.exports = router;