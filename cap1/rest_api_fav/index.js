'use strict'

const express = require('express');
const app = express();

app.listen(5522, () => 
	console.log('API REST working on http://localhost:5522'));