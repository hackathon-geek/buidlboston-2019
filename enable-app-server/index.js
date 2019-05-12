const http = require('http');
const url = require('url');
const algorand = require('algorand');
const awsConfig = require('./configs/aws-config.js');

// let invention = {
// 	id : "INV124",
// 	title : "Prosthertic (Right) Arm for Kids",
// 	version : "v1",
// 	description : "Blah Blah Blah Blah"
// };

// let table = {
// 	"name": "enable_inventions",
// 	"primaryKey": "id"
// };

// algorand.write(invention, table);

const app = http.createServer(function(req, res) {

	const generateResponse = function(jsonObj) {
		res.write(JSON.stringify(jsonObj));
		res.end();
	}
	const urlInfo = url.parse(req.url, true);

	switch(req.method + urlInfo.pathname) {
		// invention
		case "GET/inventions": {
			algorand.readAll(awsConfig.tables.INVENTIONS_TABLE)
				.then(generateResponse)
				.catch(generateResponse);
			break;
		}
		case "POST/invention": {
			break;
		}
		// inventor
		case "GET/inventor": {
			let queryParams = urlInfo.query;

			algorand.read(awsConfig.tables.INVENTORS_TABLE, queryParams.username)
				.then(generateResponse)
				.catch(generateResponse);
			break;
		}
		case "POST/inventor": {
			break;
		}
		// oracle
		case "GET/oracle": {
			let queryParams = urlInfo.query;

			algorand.read(awsConfig.tables.ORACLES_TABLE, queryParams.id)
				.then(generateResponse)
				.catch(generateResponse);
			break;
		}
		case "POST/oracle": {
			break;
		}
		case "GET/favicon.ico": {
			return;
		}
		default: {
			let jsonResponse = {
				error: {
					code: 404,
					type: "INVALID_URL",
					message: "INVALID_URL: " + req.url
				}
			};

			res.write(JSON.stringify(jsonResponse));
			res.end();
		}
	}
});  

app.listen(3000);
console.log('API running on port 3000.');