'use strict';

const utils = require('../helpers/utils');
const products = require('../services/products');

module.exports.handler = (event, context, callback) => {
  try {
    switch(`${event.httpMethod} ${event.resource}`) {
      
        case 'GET /products':      
            products.retrieveAll(callback);
            break;

        default:
            utils.notFoundHandler(callback);
    }
  } catch (err) {
      utils.errorHandler(err, callback);
  }
};
