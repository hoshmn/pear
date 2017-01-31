'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const IndivdualPartner = require('./individualPartner')
const Individual = require('./individual')
const Group = require('./group')

Individual.belongsToMany(Individual, { 
	as: 'partner',
	through: 'individualPartners'
	 })

// Individual.belongsToMany(Group, )
Group.hasMany(Individual)

module.exports = {Group, Individual, IndivdualPartner}
