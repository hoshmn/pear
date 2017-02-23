'use strict' 

const express = require('express')
const router = new express.Router()

const Group = require('APP/db/models').Group
// const Individual = require('APP/db/models').Individual

router.get('/', (req, res, next) => {
	Group.findAll()
	.then(groups => res.json(groups))
	.catch(next)
})

module.exports = router