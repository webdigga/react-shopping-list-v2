// Require the AWS SDK
const AWS = require('aws-sdk');

// Set the config for connecting to DB
AWS.config.update({
	region: 'eu-west-2',
	endpoint: 'https://dynamodb.eu-west-2.amazonaws.com'
});

// Connect to the DB
const db = new AWS.DynamoDB.DocumentClient();

// Set the table name used for all the DB functions
let params = {
	TableName: 'list-shopping'
};

// Get alllllllll the records
exports.findAll = function( req, res ) {
	db.scan( params, onScan );
	function onScan( err, data ) {
		if ( err ) {
			console.error( 'Unable to scan the table. Error JSON:', JSON.stringify( err, null, 2 ) );
		} else {
			res.send( data );
		}
	}
};

// Add a single record
exports.add = function( req, res ) {
	params.Item = req.body;
	db.put(params, function( err, data ) {
		if ( err ) {
			console.error( 'Unable to add new item. Error JSON:', JSON.stringify( err, null, 2 ) );
		} else {
			res.send( data );
		}
	});
};

// Delete a record
exports.delete = function( req, res ) {
	params.Key = {
		'id': req.body
	}
	db.delete(params, function( err, data ) {
		if ( err ) {
			console.error( 'Unable to delete item. Error JSON:', JSON.stringify( err, null, 2 ) );
		} else {
			console.log( 'DeleteItem succeeded:', JSON.stringify( data, null, 2 ) );
		}
	});
};
