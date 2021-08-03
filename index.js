const express = require('express');
const app = require('./app');

const port = 3000;
const hostname = 'localhost';

const server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGINT', () => {
    console.log(' : SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('HTTP server closed.');
    });
});
