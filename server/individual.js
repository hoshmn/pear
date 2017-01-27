'use strict' 

const express = require('express')
const router = new express.Router()

const Individual = require('APP/db/models').Individual

router.get('/', (req, res, next) => {
	Individual.findAll()
	.then(indivs => res.json(indivs))
	.catch(next)
})

module.exports = router