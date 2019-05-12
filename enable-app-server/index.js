const http = new require('http');
const algorand = new require('algorand');

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
// algorand.read(table, invention.id)
// .then(function(obj) {
// 	console.log(obj);
// })
// .catch(function(obj) {
// 	console.log(obj);
// });

const app = http.createServer(function(req, res) {

	switch(req.method + "_" + req.url) {
		// invention
		case "GET_invention": {
			
			break;
		}
		case "POST_invention": {
			break;
		}
		// inventor
		case "GET_inventor": {
			break;
		}
		case "POST_inventor": {
			break;
		}
		// oracle
		case "GET_oracle": {
			break;
		}
		case "POST_oracle": {
			break;
		}
	}
	res.write(req.url);
	res.end();
  });  

app.listen(3000);
console.log('API running on port 3000.');