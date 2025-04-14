const express = require('express');
const morgan = require('morgan');

const routeHandler = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', routeHandler);
app.use('/*wildcard', (req, res) => {
    res.status(404).json({ message: 'Route not found', success: false });
});

module.exports = app;