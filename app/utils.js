'use strict'

export class Individual {
    constructor(sqlIndiv) {
        this.name = sqlIndiv.name
        this.id = sqlIndiv.id
        sqlIndiv.partner.forEach(partner => {
            const pname = partner.name
            const ppref = partner.individualPartners.preference
            this[pname] = ppref
        })
    }
}

export const colorInterpolator = (preference) => {
    const R = (preference < 0) ? 250 : 0
    const G = (preference > 0) ? 250 : 0
    const A = Math.abs(preference / 20)
    return `rgba(${R},${G},0,${A})`
}

export const averageLikedByGroup = (individual, group) =>
    group.reduce((totalLiked, groupMember) => {
        const likedByMember = +groupMember[individual.name] || 0
        return totalLiked += likedByMember
    }, 0) / (group.length - 1)

export const averageLikesGroup = (individual, group) =>
    group.reduce((totalLikes, groupMember) => {
        const likesMember = +individual[groupMember.name] || 0
        console.log(likesMember, totalLikes)
        return totalLikes += likesMember
    }, 0) / (group.length - 1)

// PEAR utils

const randomEl = arr => arr[Math.floor(Math.random()*arr.length)]

const pluck = (group, indiv) => 
	group.filter(ind => ind.id!=indiv.id)

export const swap = (group, indiv) => 
	group.map(ind => ind.id===indiv.id ? indiv : ind)

const compatability = (personA, personB) => {
	const Apref = personA[personB.name] || 0
	const Bpref = personB[personA.name] || 0
	return Apref + Bpref
}

const pear = (group, indiv = randomEl(group)) => {
	const pairs = []

	while (group.length){
		group = pluck(group, indiv) //returns copy of group, without indiv
		const partner = group.reduce( (bestMatch, next) => {
			return (compatability(indiv, next) > compatability(indiv, bestMatch))
			? next
			: bestMatch
		})
		group = pluck(group, partner)
		pairs.push([indiv,partner])
		if (group.length === 1) pairs.push([group.pop()])
		else indiv = randomEl(group)
	}

	return pairs
}