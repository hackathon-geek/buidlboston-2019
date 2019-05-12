const algorand = require("../libs/algorand.js");
const algosdk = require("algosdk");
const config = require("../configs/algorand-config.js");

algorand.fetchLastBlock()
    .then((obj) => {
        var blockJson = JSON.stringify(obj, undefined, 4);
        console.log(blockJson);
    }).catch((obj) => {
        console.log(obj);
    });

// config.account = algorand.createAccount();
// console.log(config.account);

transaction_details = {
    "from": config.account.address,
    "to": "JSJGYFEJJONBOVMKKXEVYZW6WKQY4VU3IWGCJW7GUFX5SRYYEENQUWDRAI",
    "fee": 1000,
    "amount": 1000,
    "firstRound": 923213,
    "lastRound": 924213,
    "note": algosdk.encodeObj({test:"ak"}),
};
algorand.submitTransaction(
    transaction_details,
    algosdk.mnemonicToSecretKey(config.account.mnemonic).sk
).then(function(obj) {
    console.log(obj);
}).catch(function(obj) {
    console.log(obj);
});

transactionId = "CBMC6V4WQDJ2FDPXLZJ2YJJHVNRFVVZSHETAFO7YMCROWJ5A7DZA";
algorand.retrieveTransaction("AUYZVPAKGRCWIZJYHMJZTLWD7DZ3SIPG7GZR3VOVDMX7KFROINNBZ4VFCQ", transactionId)
.then(function(obj) {

    var transactionInfo = JSON.stringify(obj, undefined, 4);
    console.log(transactionInfo);

    var encodednote = algosdk.decodeObj(obj.note);
    console.log(encodednote);
})
.catch(function(obj) {
    console.log(obj);
});