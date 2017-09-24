'use strict'

function test(req, res){
	const test_param = req.params.test_param ? req.params.test_param : "No test param";
	res.status(201).send({text: 'test Response!!!', test_param: `${test_param}`});
}

function getFavorito(req, res){
	const fav_id = req.params.id;

	res.status(200).send({data: fav_id});
}

function getFavoritos(req, res){
	
}

function saveFavorito(req, res){
	const params = req.body;

	res.status(200).send({saved: true, favorito: params});
}

function updateFavorito(req, res){
	const params = req.body;

	res.status(200).send({updated: true, favorito: params});
}

function deleteFavorito(req, res){
	const params = req.params;

	res.status(200).send({deleted: true, favorito: params});
}


module.exports = {
	test,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}