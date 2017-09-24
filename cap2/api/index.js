'use strict'
var app = require('./app');
const port = process.env.PORT || 5522;

app.listen(port, () => {
	console.log('API REST working on http://localhost:'+port);
})
