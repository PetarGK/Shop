const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB(); 
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.retrieveAllProducts = (callback) => {
    
    const params = {
        TableName: 'Products'
    };

    documentClient.scan(params, (err, data) => {
        if (err) callback(err); 
        else if (data.Items) {
            const products = [];
            data.Items.map(item => {
                products.push({
                    id: item.ID,
                    name: item.Name,
                    price: item.Price
                });                
            });

            callback(null, products);
        }
        else callback(null, []);
    }); 
};

module.exports.saveProduct = (product, callback) => {
    
    const params = {
        TableName: "Products",
        Item: {
            ID: product.id,
            Name: product.name,
            Description: product.description,
            Price: product.price
        }
    };

    documentClient.put(params, callback);
};

module.exports.updateProduct = (productId, product, callback) => {
    
    const params = {
        TableName: "Products",
        Item: {
            ID: productId,
            Name: product.name,
            Description: product.description,
            Price: product.price
        }
    };

    documentClient.put(params, callback);
};

module.exports.deleteProduct = (productId, callback) => {
    
    const params = {
        TableName: "Products",
        Key: {
            ID: productId
        }
    };

    documentClient.delete(params, callback);
};
