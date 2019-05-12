const sdk = require("aws-sdk");
const config = require("../configs/aws-config.js");

const awsConfig = config.awsConfig;
sdk.config.update(awsConfig);
const dbClient = new sdk.DynamoDB.DocumentClient();

const write = function(table, data){
    return new Promise(function(resolve, reject) {
        
        dbClient.put({
            TableName: table.name,
            Item: data
        }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const read = function(table, id) {
    return new Promise(function(resolve, reject) {
        let key = {};
        key[table.primaryKey] = id;
        
        dbClient.get({
            TableName: table.name,
            Key: key
        }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const readAll = function(table, awsFilterExpression) {
    return new Promise((resolve, reject) => {
        dbClient.scan({
            TableName: table.name
        }, (err,data) => {
            if (err) {
                reject(err);
            } else {        
                resolve(data);
            }
        });
    });
}

module.exports.write = write;
module.exports.read = read;
module.exports.readAll = readAll;