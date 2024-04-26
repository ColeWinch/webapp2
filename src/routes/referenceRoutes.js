const express = require('express');
const referenceRouter = express.Router();

referenceRouter.route('/')
    .get((req, res) => {
        res.render('references', {
            nav: [
                {link: '/references', title: 'References'},
            ],
            title: 'References',
        }
        );
    });

module.exports = referenceRouter;