const db = require('../repositories/fakedb');
const utils = require('../helpers/utils');

module.exports.retrieveAll = (callback) => {
    db.retrieveAllProducts((err, products) => {
        if (err) return utils.errorHandler(err, callback);
        else utils.successHandler(products, callback);
    });
};