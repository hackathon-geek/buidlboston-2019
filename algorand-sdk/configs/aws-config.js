const awsConfig = {
    "region": "us-east-1",
    "endpoint": "dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID || "YOUR_AWS_ACCESS_KEY_ID",
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY || "YOUR_AWS_SECRET_ACCESS_KEY"
};
const tables = {
    "INVENTIONS_TABLE": {
        "name": "enable_inventions",
        "primaryKey": "id"
    },
    "INVENTORS_TABLE": {
        "name": "enable_inventors",
        "primaryKey": "username"
    },
    "ORACLES_TABLE": {
        "name": "enable_oracles",
        "primaryKey": "id"
    }
};

module.exports.awsConfig = awsConfig;
module.exports.tables = tables;