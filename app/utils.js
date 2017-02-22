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
        return totalLikes += likesMember
    }, 0) / (group.length - 1)

// PEAR utils

const randomEl = arr => arr[Math.floor(Math.random()*arr.length)]

const pluck = (group, indiv) => 
	group.filter(ind => ind.id!=indiv.id)

export const swap = (group, indiv) => 
	group.map(ind => ind.id===indiv.id ? indiv : ind)

//returns the average compatibility [-10,10] between all members of a team (array of any number of indivs)
export const compatibility = team => {
	// console.log(team)
	if (!Array.isArray(team)) return 0
	let numberOfPrefs = 0
	const totalPrefs = team.reduce((accumPrefs,liker,i)=>{
		return accumPrefs += team.reduce((accumLikerPrefs,likee,j)=>{
			const like = liker[likee.name]
			if (i!=j && like!=undefined){
				accumLikerPrefs+=like
				numberOfPrefs++
			}
			return accumLikerPrefs
		},0)
	},0)
	return numberOfPrefs ? totalPrefs/numberOfPrefs : 0
}

//find indiv an optimal team (array of members)
const optimalTeamForIndiv = (teams, indiv) => {
	if (teams.length === 1) return teams[0]
	return teams.reduce( (bestMatch, next) => {
		return (compatibility([indiv, ...next]) > compatibility([indiv, ...bestMatch]))
		? next
		: bestMatch
	})
}
//find indiv an optimal partner 
const optimalPartnerForIndiv = (members, indiv) => {
	// console.log('@mem',members.map(m=>m.name))
	if (members.length === 1) return members[0]
	return members.reduce( (bestMatch, next) => {
		return (compatibility([indiv, next]) > compatibility([indiv, bestMatch]))
		? next
		: bestMatch
	})
}

export const pear = group => {
	const pairs = []
	let indiv
	while (group.length > 1){
		indiv = randomEl(group)
		group = pluck(group, indiv) //returns copy of group, without indiv
		const partner = optimalPartnerForIndiv(group, indiv)
		group = pluck(group, partner)
		pairs.push([indiv,partner])
	}
	//in the case that there is a remaining indiv and no one to pair with
	if (group.length) {
		const lastIndiv = group.pop()
		const optimalTeam = optimalTeamForIndiv(pairs, lastIndiv)
		optimalTeam.push(lastIndiv)
	}
	return pairs
}