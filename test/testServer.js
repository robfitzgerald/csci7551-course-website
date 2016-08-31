'use strict';
{
	var express = require('express')
		, app = express()

	app.use('/', require('../index'))
	app.use((err, req, res, next) => {
		res.status(500).send(err.stack)
	})
	app.listen(3000, (err) => {
		console.log('listening on 3000')
	})
}