const { product, writeData } = require('../data.js');

module.exports = async(req, res) => {
    console.log('POST',req.url);
    const { id, name, price } = req.body;
    if(product['id'+id]){
       return res.status(400).json({ error: "Product already exists." });
    }
    if(!id || !name  || !price){
        return res.status(400).json({ error: "Product is not valid" });
    }
    if(typeof(id) !== 'number' || typeof(name) !== 'string' || typeof(price) !== 'number'){
        return res.status(400).json({ error: "Product is not defined properly." });
    }
    product['id'+id] = {
            name ,
            price
    }; 
    writeData(product);
    console.log(`Creating Product ${'id'+id}:`,product['id'+id]);
    return res.status(201).json({ sucess: "Product is sucessfully added." });  
}