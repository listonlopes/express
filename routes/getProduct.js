const { product } = require('../data.js');

module.exports = (req, res) => {
    let id = req.params.id;
    console.log('GET',req.url);
    console.log(`Getting Product ${id}:`,product[id]);
    if(product[id]){
        return res.status(201).json(product);
    }   
    return res.status(404).json({ error: "Product does not exists." });
}

