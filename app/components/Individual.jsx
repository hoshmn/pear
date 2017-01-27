import React, { Component } from 'react';

function colorInterpolator(preference){
  const R = (preference < 0) ? 250 : 0
  const G = (preference > 0) ? 250 : 0
  const A = Math.abs(preference/20)
  return `rgba(${R},${G},0,${A})`
}

const Individual = ({indiv, selected, select, updatePreference}) => {
  // console.log(indiv,selected)

  // const isSelected = indiv.name===selected.name
  const likedBySelected = selected[indiv.name] || 0
  const likesSelected = indiv[selected.name] || 0

  const compatabilityColor = colorInterpolator(likedBySelected)

  // console.log('etanusteosunt',indiv.name)

  return(
  <span>
    <img src='http://tiny.cc/664iiy' style={{backgroundColor:compatabilityColor}} onClick={()=>select(indiv)} />
    <h1> { indiv.name } </h1>

    {
    selected.name && <div>
      <h2> { selected.name } likes { indiv.name } { likedBySelected } </h2>
      <h2> { indiv.name } likes { selected.name } { likesSelected } </h2>
      <input onMouseUp={(e)=>updatePreference(selected, indiv, e.target.value)}
        key={selected.id}
        type="range"
        min="-10"
        max="10"
        defaultValue={likedBySelected}
        />
    </div>
    }

  </span>
)}

export default Individual

  {/*add onChange to range*/}