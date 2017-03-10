'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Individual = require('./individual')

const Group = db.define('groups', {
    name: Sequelize.STRING
})

Group.addScope('withMembers', {
    include: [{
        model: Individual,
        include: [{ model: Individual, as: 'partner' }]
    }]
})


module.exports = Group
