'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Group = db.define('groups', {
  name: Sequelize.STRING
})


 module.exports = Group