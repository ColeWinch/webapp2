const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const feedRoutes = require('./routes/feed');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || PORT;
app.use(morgan('tiny'));

app.set('views', './src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

const assignmentRouter = require('./src/routes/assignmentRoutes');
app.use('/report', assignmentRouter);
const introductionRouter = require('./src/routes/introductionRoutes');
app.use('/introduction', introductionRouter);
const LORouter = require('./src/routes/LORoutes');
app.use('/LOs', LORouter);
const referenceRouter = require('./src/routes/referenceRoutes');
app.use('/references', referenceRouter);

// app.get('/', function(req,res) {
//     res.render('index', {list: ['a','b'], title: "Web and Mobile Application Development Assignment"});
// });
app.get('/', function(req, res) {
    res.render('index',
    {
        nav: [
            {link: '/report', title: 'Report'},
            {link: '/introduction', title: 'Introduction'},
        ],
        title: 'Web and Mobile App Development Assignment'}
        );
});

// app.listen(port, function() {
//     debug(`Listening on port ${chalk.green('4000')}`);
// });

app.use(express.json());
app.use('/feed', feedRoutes);

mongoose
    .connect('mongodb+srv://cowen22:Password123@cluster0.eluucni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(result => {
        app.listen(4000);
    })
    .catch(err => console.log('err', err))

