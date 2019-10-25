const express = require('express')
const router = express.Router()
const config = require('../controllers/config.js')

// Mongo
const mongojs = require('mongojs')
const db = mongojs(config.MONGO_HOST, ['customers'])

const log = require('log')

router.get('/', (req, res) => {
	db.customers.find((err, result) => {
		res.json(result)
	})
})

router.post('/', (req, res) => {
	log(req.query)

	// validate and clean inputs
	var cleansed = {}
	for (var key in req.query) {
		switch (key) {
			// convert to Integer
			case 'dateOfBirth':
			case 'timeOfRegistration':
				cleansed[key] = +req.query[key]
				break

			// conver to Boolean
			case 'emailOptIn':
				cleansed[key] = !!req.query[key]
				break

			// parse and convert array to Integers
			case 'favoriteFiveIntegers':
				cleansed[key] = req.query[key]
					.replace(/[\[\]]+/g, '')
					.split(',')
					.map(val => +val)
				break

			// all else remain strings
			// 'fullName', 'email'
			default:
				cleansed[key] = req.query[key]
		}
	}
	log(cleansed)

	db.customers.insert(cleansed, (err, result) => {
		res.send(`sure thing boss`)
	})
})

module.exports = router
