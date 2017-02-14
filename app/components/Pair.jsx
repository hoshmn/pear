import React from 'react'

import { colorInterpolator, compatibility } from '../utils'


export default ({pair}) =>{
	const names = pair.map(indiv=>indiv.name).join(' & ')
	const compatibilityColor = colorInterpolator(compatibility(pair))
	return (
		<span className="pear" key={pair[0].id}>
			<img src="/pear_selected.png" style={{backgroundColor:compatibilityColor}} />
			<h1> {names} </h1>
		</span>
	)
}