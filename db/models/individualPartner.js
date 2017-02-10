'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const individualPartner = db.define('individualPartners', {
  preference: {
  	type: Sequelize.INTEGER,
  	validate: {min: -10, max: 10}
	}
})


 module.exports = individualPartner