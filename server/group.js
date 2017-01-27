'use strict' 

const express = require('express')
const router = new express.Router()

const Group = require('APP/db/models').Group
const Individual = require('APP/db/models').Individual

router.get('/', (req, res, next) => {
	Individual.findAll({include: [{
		model:Individual,
		as: 'partner'
		}]
	})
	.then(indivs => res.json(indivs))
	.catch(next)
})

module.exports = router