const node = {
    token : "b967f37046bd85dae75ff1d50715f14f8928e8adcc3f3cc7869edeae9f98e578",
    server : "http://buidlboston.algorand.network",
    port : 4181
};
const account = {
    "address": process.env.ALGORAND_ADDRESS || "YOUR_ALGORAND_ADDRESS",
    "mnemonic": process.env.ALGORAND_MNEMONIC || "YOUR_ALGORAND_MNEMONIC"
}

module.exports.node = node;
module.exports.account = account;