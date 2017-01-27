'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Individual = require('./individual')
const Group = require('./group')
const IndivdualPartner = require('./individualPartner')

Individual.belongsToMany(Individual, { 
	as: 'partner',
	through: 'individualPartners'
	 })

// Individual.belongsToMany(Group, )
Group.hasMany(Individual)

module.exports = {User, Individual, IndivdualPartner}
