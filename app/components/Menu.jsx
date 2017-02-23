import React, { Component } from 'react'

export default ({groups}) => {

	console.log('menue', groups);
	return (
		<div>
		{ groups && groups.map(group=>
			<h1 key={group.id}> {group.name}</h1>
			)
		}
		</div>
		)
}