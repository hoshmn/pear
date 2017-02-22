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
            // console.log(indiv.name)
            // console.log(this.state.selected.name)
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
      </div>
    
  )}

  // constructor(props) {
  //   // this.props.group = group;
  //   super(props);

  //   // this.state = {selected};
  // }

  // render() {
  //   // if (!this.state) { return null }
  //   const group = this.props.group
  //   const selected = this.props.selected
  //   console.log(group, selected)
  //   // const {joke, answered} = this.state    
  //   return (
