const { product } = require('../data.js');

const getProducts = (req, res) => {
    console.log('GET',req.url);
    if(Object.keys(product).length !== 0){
        console.log(`Getting Products:`,product);
        return res.status(201).json(product);
    } 

    return res.status(404).json({ error: "No products found." });
}

const getProduct = (req, res) => {
    let id = req.params.id;
    console.log('GET',req.url);
    console.log(`Getting Product ${id}:`,product[id]);
    if(product[id]){
        return res.status(201).json(product);
    }   

    return res.status(404).json({ error: "Product does not exists." });
}


module.exports = { 
    getProducts,
    getProduct
}