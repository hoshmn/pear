import React from 'react'

import { pear } from '../utils'


export default ({name,members,selected,groupId}) =>{
	const pairs = pear(members, selected)
	console.log(pairs)
	return(

		<div>
			<h1>{name} Pairs!</h1>
			{
				pairs && pairs.map(pair=>{
					let p = pair[0].name
					if (pair[1]) p += ' & ' + pair[1].name
					return <h1 key={pair[0].id}> {p} </h1>
					})
			}
		</div>
)}