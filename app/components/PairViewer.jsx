import React from 'react'

import Pair from './Pair'

import { pear } from '../utils'


export default ({name,members,selected,groupId}) =>{
	const pairs = pear(members)
	return(
		<span>
			<h1>{name} Pairs!</h1>
			{
				pairs && pairs.map(pair=>
					<Pair 
						key={pair[0].id}
						pair={pair}
						/>)
			}
		</span>
)}