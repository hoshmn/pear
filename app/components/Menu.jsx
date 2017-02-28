import React, { Component } from 'react'
import { Link } from 'react-router'

export default ({groups}) => {
	console.log('menue', groups);
	return (
		<div>
		{ groups && groups.map(group=>
			<div key={group.id}>
				<Link to={`/group/${group.id}`}> {group.name} </Link>
			</div>
			)
		} 
		</div>
		)
}