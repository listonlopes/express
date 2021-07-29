const express = require('express');
const app = express();

const port = 3000;
const hostname = 'localhost';

app.use(express.json({
    verify: (req, res, buffer, encoding) => {
        try {
            JSON.parse(buffer);
        } catch(error) {
        	console.log(error.message);
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Not valid JSON' }));
        }
    }
}));

const getProducts = require('./routes/getProducts');
app.get('/Products', getProducts);

const createProduct = require('./routes/createProduct');
app.post('/Product', createProduct);

const getProduct = require('./routes/getProduct');
app.get('/Product/:id', getProduct);

const updateProduct = require('./routes/updateProduct');
app.put('/Product/:id', updateProduct);

const deleteProduct = require('./routes/deleteProduct');
app.delete('/Product/:id', deleteProduct);

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