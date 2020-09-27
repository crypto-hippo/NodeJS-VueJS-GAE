require('dotenv').config()

const express = require('express');
const app = express()
const api = require('./routes/api');
const cors = require('cors');
const body_parser = require('body-parser');

app.use(cors());
app.use(body_parser.json({type: 'application/json'}));

// handle static assets
app.use(express.static('public'));

// handle requests sent to our api
app.use('/api', api);


// handle any other requests, return the index.html
// let the vue client handle the rest
app.use('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// start the server
app.listen(process.env.PORT, () => {});

module.exports = app;