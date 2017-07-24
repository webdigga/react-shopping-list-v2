var AWS = require("aws-sdk");

AWS.config.update({
	region: "eu-west-2",
	endpoint: "https://dynamodb.eu-west-2.amazonaws.com",
	credentials: {
		accessKeyId: 'AKIAIFDFWQ75XYJ4QB5Q',
		secretAccessKey: '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'
	}
});

var db = new AWS.DynamoDB.DocumentClient();

let params = {
	TableName: 'shopping-list'
};

const getAllRecordsPromise = db.scan(params).promise();

// params = {
// 	TableName: 'shopping-list',
// 	Item: {
// 		'id': 1234,
// 		'name': 'Boooommm!!!!'
// 	}
// }

const addRecordPromise = db.put(params).promise();

module.exports = {
	params: params,
	getAllRecordsPromise: getAllRecordsPromise,
	addRecordPromise: addRecordPromise
}
