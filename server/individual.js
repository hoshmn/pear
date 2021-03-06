'use strict'

const express = require('express')
const router = new express.Router()

const Individual = require('APP/db/models').Individual

router.get('/', (req, res, next) => {
    Individual.scope('withPartners').findAll()
        .then(indivs => res.json(indivs))
        .catch(next)
})

router.put('/', (req, res, next) => {
    const { liker, likee, amount } = req.body
    Individual.scope('withPartners').findById(liker.id)
        .then(indiv => indiv.setPreference(likee, amount))
        .then(updatedIndiv => res.json(updatedIndiv))
        .catch(next)
})

module.exports = router
