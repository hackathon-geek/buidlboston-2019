const aws = require("../libs/aws.js");
const config = require("../configs/aws-config.js");

aws.read(config.tables.INVENTIONS_TABLE, "INV122")
    .then(function(obj) {
        console.log(obj);
    })
    .catch(function(obj) {
        console.log(obj);
    });

let INV123 = {
    id : "INV123",
    title : "Prosthertic (Right) Arm for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
};
aws.write(config.tables.INVENTIONS_TABLE, INV123)
    .then(function(obj) {
        console.log("success!");
    })
    .catch(function(obj) {
        console.log(obj);
    });