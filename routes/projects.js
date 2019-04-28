const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { project_name } = projects[id];
    const { description } = projects[id];
    const { technologies } = projects[id];
    const { live_link } = projects[id];
    const { github_link } = projects[id];
    const { image_urls } = projects[id];

    const showProject = { project_name,
                                            description,
                                            technologies,
                                            live_link,
                                            github_link,
                                            image_urls };
    res.render(`projects`, showProject);
});

module.exports = router;
