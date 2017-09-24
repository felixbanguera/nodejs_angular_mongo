'use strict'

function test(req, res){
	const test_param = req.params.test_param ? req.params.test_param : "No test param";
	res.status(201).send({text: 'test Response!!!', test_param: `${test_param}`});
}

module.exports = {
	test: test
}