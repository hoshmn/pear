import React, { Component } from 'react';
import { Link } from 'react-router'
import Individual from './Individual';
import SelectedIndividual from './SelectedIndividual';


export default ({selected, name, members, groupId, select, updatePreference}) => {
  return (

      <div>
        <h1>Pears</h1>
        <h1> {name} </h1>
        <span className="flexbox-container" >
        {  //create PEAR component
          members && members.map( indiv => {

            return (selected.id === indiv.id)
              ? <SelectedIndividual
                    key={indiv.id}
                    indiv={indiv}
                    group={members}
                  />

              : <Individual 
                    key={indiv.id}
                    select={select}
                    updatePreference={updatePreference}
                    indiv={indiv}
                    selected={selected} 
                  />
            })
        }
        </span>
        <Link to={`/pair/${groupId}`} > PAIR! </Link>
        <br></br>
        <Link to="/">Go Home</Link>
      </div>
    
  )}


