const fs = require('fs'); 
var product = require('./product.json');

function writeData(prod) {
    fs.writeFileSync('./product.json', JSON.stringify(prod), 'utf8');
}

module.exports = {
    product,
    writeData
}