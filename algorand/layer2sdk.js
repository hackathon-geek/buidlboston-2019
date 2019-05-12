const aws = require("./libs/aws.js");
const config = require("./configs/config.js");

aws.pullData(config.tables.INVENTIONS_TABLE, "INV122")
    .then(function(obj) {
        console.log(obj);
    })
    .catch(function(obj) {
        console.log(obj);
    });