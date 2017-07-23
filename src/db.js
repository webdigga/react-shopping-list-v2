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

const params = {
	TableName: 'shopping-list'
};

const getAllPostsPromise = db.scan(params).promise();

exports.getAllPostsPromise = getAllPostsPromise;
