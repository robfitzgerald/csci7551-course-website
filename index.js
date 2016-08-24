'use strict';
{
	var express = require('express')
		, router = express.Router()

	router
		.get('/', function(req, res, next) {
			res.send('<html><head><title>Rob Fitzgerald CSCI 7551 Website</title></head><body><script src="public/js/test.js"></script></body></html>')
		})

}