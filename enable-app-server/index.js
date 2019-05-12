const http = require('http');
const url = require('url');
const algorand = require('algorand');
const awsConfig = require('./configs/aws-config.js');

const app = http.createServer(function(req, res) {

	const generateResponse = function(jsonObj) {
		res.write(JSON.stringify(jsonObj));
		res.end();
	}
	const urlInfo = url.parse(req.url, true);
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');	

	console.log(req.method + urlInfo.pathname);
	switch(req.method + urlInfo.pathname) {
		// invention
		case "GET/inventions": {
			algorand.readAll(awsConfig.tables.INVENTIONS_TABLE)
				.then(generateResponse)
				.catch(generateResponse);
			break;
		}
		case "POST/invention": {
			let inventionData = '';
			req.on('data', chunk => {
				inventionData += chunk.toString();
			});
			req.on('end', () => {
				inventionData = JSON.parse(inventionData);
				algorand.write(inventionData, awsConfig.tables.INVENTIONS_TABLE);
				res.end('ok');
			});
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
			let inventorInfo = '';
			req.on('data', chunk => {
				inventorInfo += chunk.toString();
			});
			req.on('end', () => {
				inventorInfo = JSON.parse(inventorInfo);
				algorand.write(inventorInfo, awsConfig.tables.INVENTORS_TABLE);
				res.end('ok');
			});
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
			let oracleInfo = '';
			req.on('data', chunk => {
				oracleInfo += chunk.toString();
			});
			req.on('end', () => {
				oracleInfo = JSON.parse(oracleInfo);
				algorand.write(oracleInfo, awsConfig.tables.ORACLES_TABLE);
				res.end('ok');
			});
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