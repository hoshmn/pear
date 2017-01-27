'use strict'

export class Individual {
	constructor(sqlIndiv){
		// super(sqlIndiv)
		// console.log(sqlIndiv)
		this.name = sqlIndiv.name
		this.id = sqlIndiv.id
		sqlIndiv.partner.forEach(partner=>{
			const pname = partner.name
			const ppref = partner.individualPartners.preference
			this[pname]=ppref
		})
	}
}


// const sqlIndiv = {
// 	name: 'josh',
// 	id: 2,
// 	partner: [
// 	{
// 		name: 'gil',
// 		id: 1,
// 		individualPartners: {preference: -10}
// 	},{
// 		name: 'aditya',
// 		id: 3,
// 		individualPartners: {preference: 3}
// 	},{
// 		name: 'simon',
// 		id: 5,
// 		individualPartners: {preference: 1}
// 	}]
// }

// console.log(new Individual(sqlIndiv))
