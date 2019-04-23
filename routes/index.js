const express = require('express');
const router = express.Router();
const { data } = require('../data.json');

router.get('/', (req, res) => {
    let title = data[0].project_name;
    const displayData = '';
    displayData.title = 'test';
    res.render('index', displayData);
});

module.exports = router;
