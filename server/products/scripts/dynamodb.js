// Create DynamoDB tables and insert initial data
const AWS = require('../node_modules/aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamodb = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

const productsTable = {
    TableName: 'Products',
    AttributeDefinitions: [
        {
            AttributeName: 'ID',
            AttributeType: 'S' // string
        }
    ],
    KeySchema: [
        {
            AttributeName: 'ID',
            KeyType: 'HASH'
        }   
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5, // default value
        WriteCapacityUnits: 5 // default value
    } 
};

const insertProducts = () => {

    const insertParams = {
        RequestItems: {
            'Products': [
                {
                    PutRequest: {
                        Item: {
                            ID: 'lonely-bird',
                            Name: 'Lonely Bird',
                            Description: 'Ala bala 1',
                            Price: 29.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'solid-friendship',
                            Name: 'Solid Friendship',
                            Description: 'Ala bala 2',
                            Price: 19.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'thanksgiving',
                            Name: 'Thanksgiving',
                            Description: 'Ala bala 3',
                            Price: 39.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'old-man',
                            Name: 'Old Man',
                            Description: 'Ala bala 4',
                            Price: 19.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'lait-cow',
                            Name: 'Lait Cow',
                            Description: 'Ala bala 5',
                            Price: 59.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'chicken',
                            Name: 'Chicken',
                            Description: 'Ala bala 6',
                            Price: 29.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'hare',
                            Name: 'Hare',
                            Description: 'Ala bala 7',
                            Price: 49.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'fall',
                            Name: 'Fall',
                            Description: 'Ala bala 8',
                            Price: 19.99
                        }
                    }
                },
                {
                    PutRequest: {
                        Item: {
                            ID: 'gardener',
                            Name: 'Gardener',
                            Description: 'Ala bala 9',
                            Price: 39.99
                        }
                    }
                }                                                                                                                                
            ]
        }
    };
    
    documentClient.batchWrite(insertParams, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log(data);
    });
};

dynamodb.createTable(productsTable, (err, data) => {
    if (err) return console.log(err, err.stack);

    const params = {
        TableName: 'Products'
    };

    dynamodb.waitFor('tableExists', params, (err, data) => {
        if (err) console.log(err, err.stack);
        else     insertProducts();
    });    
});
