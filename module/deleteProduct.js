const { product, writeData } = require('../data.js');

module.exports = (req, res) => {
    let id = req.params.id;
    console.log('DELETE',req.url);
    if(product[id]){
        console.log(`Deleting Product ${id}:`,product[id]);
        delete product[id];
        writeData(product);
        return res.status(201).json({ sucess: "Product is sucessfully deleted." });     
    }
   
    return res.status(404).json({ error: "Product does not exists." });
}
