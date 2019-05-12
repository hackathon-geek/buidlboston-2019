const aws = require("../libs/aws.js");
const mockData = require("../tests/mock-data.js");

aws.read(mockData.tables.INVENTIONS_TABLE, "INV122")
    .then((obj) => {
        console.log(obj);
    })
    .catch((obj) => {
        console.log(obj);
    });

let invention = {
    id : "INV125",
    title : "Prosthertic (Right) Arm for Kids",
    version : "v1",
    description : "Blah Blah Blah Blah"
};
aws.write(mockData.tables.INVENTIONS_TABLE, invention)
    .then((obj) => {
        console.log("success!");
    })
    .catch((obj) => {
        console.log(obj);
    });

aws.readAll(mockData.tables.INVENTIONS_TABLE)
    .then((obj) => {
        console.log(obj);
    })
    .catch((obj) => {
        console.log(obj);
    });