'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Individual = db.define('individuals', {
  name: Sequelize.STRING
}, {
	// defaultScope: {
	//     include: [{
	//     	model: Individual), 
	//     	as: 'partner'
	//   			}]
	// },

	instanceMethods: {
		setPreference: function (partner, pref){
			return db.model('individualPartners').findOrCreate({where: 
				{
				individual_id: this.id,
				partner_id: partner.id
				}	
			})
			.spread((indivPart, created) => {
				indivPart.preference = pref
				return indivPart.save()
			})
			//return instance after pref updated
			.then(() => this)
		}
	}
})

Individual.addScope('withPartners', {
	include: [{
		model: Individual, 
		as: 'partner'
	}]
})


 module.exports = Individual
