const awsConfig = {
    "region": "us-east-1",
    "endpoint": "dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID || "YOUR_AWS_ACCESS_KEY_ID",
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY || "YOUR_AWS_SECRET_ACCESS_KEY"
};

module.exports.awsConfig = awsConfig;