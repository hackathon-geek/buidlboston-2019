const sdk = require("aws-sdk");
const config = require("../configs/config.js");

const awsConfig = config.awsConfig;
sdk.config.update(awsConfig);
const dbClient = new sdk.DynamoDB.DocumentClient();

const pushData = function(){};

const pullData = function(table, id) {
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

module.exports.pushData = pushData;
module.exports.pullData = pullData;