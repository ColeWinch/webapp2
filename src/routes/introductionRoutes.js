const express = require('express');
const introductionRouter = express.Router();

introductionRouter.route('/')
    .get((req, res) => {
        res.render('introduction', {
            nav: [
                {link: '/introduction', title: 'Introduction'},
            ],
            title: 'Introduction',
        }
        );
    });

module.exports = introductionRouter;