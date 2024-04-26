const express = require('express');
const assignmentRouter = express.Router();

const assignment = [
    {
        title: "Introduction",
        subtitle: "Provides an introduction to the assignment, used within the report.",
        alias: "/introduction"
    },
    {
        title: "Learning Outcomes ",
        subtitle: "Provides a list of the learning outcomes being applied to this assignment.",
        alias: "/LOs"
    },
    {
        title: "References",
        subtitle: "Provides a list of references used in the assignment report, using Hardvard Referencing.",
        alias: "/references"
    }
]

assignmentRouter.route('/')
    .get((req, res) => {
        res.render('report', {
            nav: [
                {link: '/report', title: 'Report'},
                // {link: '/contact', title: 'Contact'},
            ],
            title: 'BS2205 - Portfolio Information',
            assignment
        }
        );
    });

module.exports = assignmentRouter;