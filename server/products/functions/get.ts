'use strict'

import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

module.exports.get = (event, context, callback) => {

  const params = {
    TableName: 'Products'
  }

  dynamoDb.scan(params, (err, data) => {
    const products = []

    if (err) callback(err)
    else if (data.Items) {

      data.Items.map(item => {
        products.push({
          id: item.ID,
          name: item.Name,
          price: item.Price
        })
      })
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(products)
    }
    callback(null, response)
  })
}
