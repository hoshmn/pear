import React, { Component } from 'react'
import { colorInterpolator } from '../utils'

const Individual = ({indiv, selected, select, updatePreference}) => {
  const likedBySelected = selected[indiv.name] || 0
  const likesSelected = indiv[selected.name] || 0
  const compatabilityColor = colorInterpolator(likedBySelected)

  console.log('!!!!!', indiv.name, likedBySelected)
  return(
      <span className="pear">
      <img src="/pear_ind.png" style={{backgroundColor:compatabilityColor}} onClick={()=>select(indiv)} />
      <h1 className="indiv-info"> { indiv.name } </h1>

      {
      selected.name && <div className="indiv-info">
        <h2> { selected.name } likes { indiv.name } { likedBySelected } </h2>
        {/*<h2> { indiv.name } likes { selected.name } { likesSelected } </h2>*/}
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