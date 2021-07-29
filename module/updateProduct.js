const { product,writeData } = require('../data.js');

module.exports = async(req, res) => {
    try {
        let id = req.params.id;
        console.log('PUT',req.url);
        if(!product[id]){
            return res.status(404).json({ error: "Product does not exists." });
        }

        console.log(`Upadating Product ${id}:`,product[id]);
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ error: "Product is not valid" });
        }
        
        if (typeof(name) !== 'string' || typeof(price) !== 'number'){ 
            return res.status(400).json({ error: "Product is not defined properly." });
        }

        product[id] = {
            name, 
            price
        };
        
        writeData(product);

        console.log(`Upadated Product ${id}:`,product[id]);
        return res.status(201).json({ sucess: "Product is sucessfully updated." });          
        
    } 
    catch (error) {
        console.log(error.message, 'catch');
        return res.status(400).json({ error: "JSON is not valid" });
    }
}