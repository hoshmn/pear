import React from 'react'
import { Link } from 'react-router'

import Pair from './Pair'

import { pear } from '../utils'


export default ({name,members,selected,groupId}) =>{
	const pairs = pear(members)
	return(
		<div>
			<h1>{name} Pairs!</h1>
			<span className="flexbox-container">
				{
					pairs && pairs.map(pair=>
						<Pair 
							key={pair[0].id}
							pair={pair}
							/>)
				}
			</span>
			<Link to='/'> Home </Link>
		</div>
)}