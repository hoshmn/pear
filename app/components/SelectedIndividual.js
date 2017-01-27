import React, { Component } from 'react';

// function colorInterpolator(preference){
//   const R = (preference < 0) ? 250 : 0
//   const G = (preference > 0) ? 250 : 0
//   const A = Math.abs(preference/10)
//   return `rgba(${R},${G},0,${A})`
// }

const SelectedIndividual = ({indiv}) => {
	console.log('OOOOO', indiv)
  return(
  <span>
    <img src='http://www.clker.com/cliparts/8/3/0/e/1349437881977221096Pear%20Outline.svg.hi.png' />
    <h1> { indiv.name.toUpperCase() } </h1>
  </span>
)}

export default SelectedIndividual