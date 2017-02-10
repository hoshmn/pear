import React, { Component } from 'react'
import { colorInterpolator, averageLikesGroup } from '../utils'

const SelectedIndividual = ({indiv, group}) => {
	console.log('@', indiv.name)
	const averagePreference = averageLikesGroup(indiv, group)
	const compatabilityColor = colorInterpolator(averagePreference)
  	return(
	  	<span className="pear">
	    	<img src="pear_selected.png" style={{backgroundColor:compatabilityColor}} />
	    	<h1 className="indiv-info"> { indiv.name.toUpperCase() } </h1>
	  	</span>
)}

export default SelectedIndividual