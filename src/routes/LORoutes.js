const express = require('express');
const LORouter = express.Router();

LORouter.route('/')
    .get((req, res) => {
        res.render('LO', {
            nav: [
                {link: '/LOs', title: 'Learning Objectives'},
            ],
            title: 'Learning Objectives',
        }
        );
    });

module.exports = LORouter;