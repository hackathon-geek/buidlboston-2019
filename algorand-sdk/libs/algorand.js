const algosdk = require("algosdk");
const config = require("../configs/algorand-config.js");

const algodclient = new algosdk.Algod(
    config.node.token, config.node.server, config.node.port);

const fetchLastBlock = function() {
    return new Promise(function(resolve, reject) {
        (async () => {
            let lastround = (await algodclient.status()).lastRound;
            let block = (await algodclient.block(lastround));
            resolve (block);
        })().catch(e => {
            reject(e);
        });
    });
};
const createAccount = function() {
    let acc_info = algosdk.generateAccount();
    acc_info["mnemonic"] = algosdk.secretKeyToMnemonic(acc_info.sk);
    return acc_info;
};
const submitTransaction = function(tx, signKey) {
    return new Promise(function(resolve, reject) {

        var signedTxn = algosdk.signTransaction(tx, signKey);
        console.log(signedTxn);

        (async() => {
            let tx = (await algodclient.sendRawTransaction(signedTxn.blob));
            resolve(tx);
        })().catch(e => {
            reject(e);
        });
        
    }); 
};
const retrieveTransaction = function(accountAddress, transactionId) {

    return new Promise(function(resolve, reject) {

        (async() => {
            let tx = (await algodclient.transactionInformation(accountAddress, transactionId));
            resolve(tx);
        })().catch(e => {
          reject(e);
        });
    });
};

module.exports.fetchLastBlock = fetchLastBlock;
module.exports.createAccount = createAccount;
module.exports.submitTransaction = submitTransaction;
module.exports.retrieveTransaction = retrieveTransaction;