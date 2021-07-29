const express = require('express');
const app = express();

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

const getProducts = require('./module/getProducts');
app.get('/Products', getProducts);

const createProduct = require('./module/createProduct');
app.post('/Product', createProduct);

const getProduct = require('./module/getProduct');
app.get('/Product/:id', getProduct);

const updateProduct = require('./module/updateProduct');
app.put('/Product/:id', updateProduct);

const deleteProduct = require('./module/deleteProduct');
app.delete('/Product/:id', deleteProduct);

app.use((req, res) => {
   res.status(404).json({ error: "Path not found." })
});

module.exports = app;