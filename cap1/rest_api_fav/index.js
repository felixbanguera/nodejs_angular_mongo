'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5522;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/test/:test_param', (req, res) => {
	const test_param = req.params.test_param;
	res.status(201).send({text: 'test Response!!!', test_param: `${test_param}`});
});

app.listen(port, () => {
	console.log('API REST working on http://localhost:'+port);
})
