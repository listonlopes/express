const { product } = require('../data/data.js');

module.exports = (req, res) => {
    console.log('GET',req.url);
    if(Object.keys(product).length !== 0){
        console.log(`Getting Products:`,product);
        return res.status(201).json(product);
    } 
    return res.status(404).json({ error: "No products found." });
}