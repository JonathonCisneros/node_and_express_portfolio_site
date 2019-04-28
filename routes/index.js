const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
const data = { projects };

router.get('/', (req, res) => {
    res.render('index', data);
});

module.exports = router;
