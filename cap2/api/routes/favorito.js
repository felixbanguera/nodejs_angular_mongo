'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/test/:test_param?', FavoritoController.test);

module.exports = api;