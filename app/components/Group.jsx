import React, { Component } from 'react';
import Individual from './Individual';
import SelectedIndividual from './SelectedIndividual';

// const group = [
//   {
//     id: 1,
//     name: 'Josh',
//     Gil: 17,
//     Aditya: 9,
//     Rose: 8
//   },{
//     id: 2,
//     name: 'Gil',
//     Josh: 27,
//     Aditya: 9,
//     Rose: 8
//   },{
//     id: 3,
//     name: 'Aditya',
//     Gil: 7,
//     Josh: 9,
//     Rose: 8
//   },{
//     id: 4,
//     name: 'Rose',
//     Gil: 7,
//     Aditya: 9,
//     Josh: 8
//   },{
//     id: 5,
//     name: 'Simon',
//     Gil: 7,
//     Aditya: 9,
//     Josh: 8
//   }
// ];

// const selected = {
//     id: 1,
//     name: 'Josh',
//     Gil: 17,
//     Aditya: 9,
//     Rose: 8
//   };


export default ({selected, name, members, select, updatePreference}) => {
  // console.log(group)
  return (

      <div>
        <h1>Pears</h1>
        <h1> {name} </h1>
        <span className="flexbox-container" >
        {  //create PEAR component
          members && members.map( indiv => {
            // console.log(indiv.name)
            // console.log(this.state.selected.name)
            return (selected === indiv)
              ? <SelectedIndividual
                    indiv={indiv}
                    key={indiv.id}
                  />

              : <Individual 
                    select={select}
                    updatePreference={updatePreference}
                    indiv={indiv}
                    selected={selected} 
                    key={indiv.id}
                  />
            })
        }
        </span>
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
