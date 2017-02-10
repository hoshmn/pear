//TODO: lodashify

// const remove = require('lodash').remove
// console.log('lo', _.remove)

// const randomEl = arr => arr[Math.floor(Math.random()*arr.length)]

// const pluck = (group, indiv) => {
// 	return group.filter(ind => ind!=indiv)
// }

// const compatability = (personA, personB) => {
// 	const Apref = personA[personB.name] || 0
// 	const Bpref = personB[personA.name] || 0
// 	return Apref + Bpref
// }

// const pear = (group, indiv = randomEl(group)) => {
// 	const pairs = []

// 	while (group.length){
// 		group = pluck(group, indiv) //returns copy of group, without indiv
// 		const partner = group.reduce( (bestMatch, next) => {
// 			return (compatability(indiv, next) > compatability(indiv, bestMatch))
// 			? next
// 			: bestMatch
// 		})
// 		group = pluck(group, partner)
// 		pairs.push([indiv,partner])
// 		if (group.length === 1) pairs.push([group.pop()])
// 		else indiv = randomEl(group)
// 	}

// 	return pairs
// }

// console.log(pear(group))