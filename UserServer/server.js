'use strict';

const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

// register JSON parser middlewear
app.use(bodyParser.json());

require('./routes/userRoutes')(app);

app.listen(3001, () => {
    console.log('Server is up!');
});

module.exports = app;