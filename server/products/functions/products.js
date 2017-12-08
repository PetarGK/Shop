'use strict';

const utils = require('../helpers/utils');
const products = require('../services/products');

module.exports.handler = (event, context, callback) => {
  try {
    switch(`${event.httpMethod} ${event.resource}`) {
      
        case 'GET /products':      
            products.retrieveAll(callback);
            break;

        case 'POST /products':                
            const createProduct = JSON.parse(event.body);
            products.saveProduct(createProduct, callback);
            break;

        case 'PUT /products/{productId}':       
            const updateProductId = event.pathParameters.productId;         
            const updateProduct = JSON.parse(event.body);
            products.updateProduct(updateProductId, updateProduct, callback);
            break;        
            
        case 'DELETE /products/{productId}':       
            const deleteProductId = event.pathParameters.productId;         
            products.deleteProduct(deleteProductId, callback);
            break;                

        default:
            utils.notFoundHandler(callback);
    }
  } catch (err) {
      utils.errorHandler(err, callback);
  }
};
