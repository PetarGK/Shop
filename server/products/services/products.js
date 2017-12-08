//const db = require('../repositories/fakedb');
const db = require('../repositories/dynamodb');
const utils = require('../helpers/utils');

module.exports.retrieveAll = (callback) => {
    db.retrieveAllProducts((err, products) => {
        if (err) return utils.errorHandler(err, callback);
        else utils.successHandler(products, callback);
    });
};

module.exports.saveProduct = (product, callback) => {
    db.saveProduct(product, (err, res) => {
        if (err) utils.errorHandler(err, callback);
        else utils.successHandler(res, callback);
    });
};

module.exports.updateProduct = (productId, product, callback) => {
    db.updateProduct(productId, product, (err, res) => {
        if (err) utils.errorHandler(err, callback);
        else utils.successHandler(res, callback);
    });
};

module.exports.deleteProduct = (productId, callback) => {
    db.deleteProduct(productId, (err, res) => {
        if (err) utils.errorHandler(err, callback);
        else utils.successHandler(res, callback);
    });
};

