const group = [
	{
		name: 'Josh',
		Gil: 17,
		Aditya: 9,
		Rose: 8
	},{
		name: 'Gil',
		Josh: 27,
		Aditya: 9,
		Rose: 8
	},{
		name: 'Aditya',
		Gil: 7,
		Josh: 9,
		Rose: 8
	},{
		name: 'Rose',
		Gil: 7,
		Aditya: 9,
		Josh: 8
	},{
		name: 'Simon',
		Gil: 7,
		Aditya: 9,
		Josh: 8
	}
]

const randomEl = arr => arr[Math.floor(Math.random()*arr.length)]

const pluck = (group, indiv) => {
	return group.filter(ind => ind!=indiv);
}

const compatability = (personA, personB) => {
	const Apref = personA[personB.name] || 0;
	const Bpref = personB[personA.name] || 0;
	return Apref + Bpref;
}

const pear = (group, indiv = randomEl(group)) => {
	const pairs = [];

	while (group.length){
		group = pluck(group, indiv); //returns copy of group, without indiv
		const partner = group.reduce( (bestMatch, next) => {
			return (compatability(indiv, next) > compatability(indiv, bestMatch))
			? next
			: bestMatch
		});
		group = pluck(group, partner);
		pairs.push([indiv,partner]);
		if (group.length === 1) pairs.push([group.pop()]);
		else indiv = randomEl(group);
	}

	return pairs;
}

console.log(pear(group))