const algorand = require("./libs/algorand.js");
const algosdk = require("algosdk");
const config = require("./configs/algorand-config.js");
const aws = require("./libs/aws.js");

const read = aws.read;
const write = function(jsonData, table) {

    // TODO: Promise chaining
    
    // WRITE TO ALGORAND
    transaction_details = {
        // TEMPORARY HARD-CODES FOR TRANSACTION
        "from": config.account.address,
        "to": "JSJGYFEJJONBOVMKKXEVYZW6WKQY4VU3IWGCJW7GUFX5SRYYEENQUWDRAI",
        "fee": 1005,
        "amount": 1003,
        "firstRound": 924507,
        "lastRound": 925507,
        // MAIN DATA
        "note": algosdk.encodeObj(jsonData),
    };
    algorand.submitTransaction(
        transaction_details,
        algosdk.mnemonicToSecretKey(config.account.mnemonic).sk
    ).then(function(algorandSuccessObj) {
        console.log("successfully written to Algorand!");
        console.log(algorandSuccessObj);
        
        // WRITE TO AWS
        jsonData["tx_info"] = algorandSuccessObj;
        aws.write(table, jsonData)
            .then(function(awsSuccessObj) {
                console.log("successfully written to AWS!");
                console.log(awsSuccessObj);
            })
            .catch(function(awsErrorObj) {
                console.log("error while writing to AWS!");
                console.log(awsErrorObj);
            });
    }).catch(function(algorandErrorObj) {
        console.log("error while writing to Algorand!");
        console.log(algorandErrorObj);
    });
};

module.exports.read = read;
module.exports.write = write;