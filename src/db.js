function getJSON(url) {
  'use strict';
  var xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
  });
}

// // Require the AWS SDK
// const AWS = require("aws-sdk");

// // Set the config for connecting to DB
// AWS.config.update({
// 	region: "eu-west-2",
// 	endpoint: "https://dynamodb.eu-west-2.amazonaws.com"
// });

// // COnnect to the DB
// const db = new AWS.DynamoDB.DocumentClient();

// // Set the table name used for all the DB functions
// let params = {
// 	TableName: 'shopping-list'
// };

// // Get alllllllll the records
// const getAllRecords = db.scan(params).promise();

// // Add a single record
// function addRecord(Item) {

// 	params.Item = Item;

// 	return new Promise(function(fulfill, reject) {
// 		db.put(params, function(err, data) {
// 			if(err) {
// 				reject(err);
// 			} else {
// 				fulfill(data);
// 			}
// 		});
// 	});
// }

// // Export stuff
// module.exports = {
// 	db: db,
// 	getAllRecords: getAllRecords,
// 	addRecord: addRecord
// }

module.exports = {
	getJSON: getJSON
}
