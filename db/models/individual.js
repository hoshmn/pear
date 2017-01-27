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
			return db.model('individualPartner').findOrCreate({
				individual_id: this.id,
				partner_id: partner.id
			})
			.spread((indivPart, created) => {
				indivPart.preference = pref
				console.log('saving: ', indivPart, pref)
				return indivPart.save()
			})
		}
	}
})


 module.exports = Individual
