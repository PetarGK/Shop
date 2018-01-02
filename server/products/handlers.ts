'use strict'

import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

module.exports.products = (event, context, callback) => {

  switch (`$(event.httpMethod) $(event.resource)`) {
    case 'GET /products':
      const params1 = {
        TableName: 'Products'
      }

      dynamoDb.scan(params1, (err, data) => {
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
      break
    case 'POST /products':
      const product = JSON.parse(event.body)

      const params2 = {
        TableName: 'Products',
        Item: {
          ID: product.id,
          Name: product.name,
          Description: product.description,
          Price: product.price
        }
      }

      dynamoDb.put(params2, callback)
      break
  }

}
