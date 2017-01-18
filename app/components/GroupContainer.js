import React from 'react'
import { connect } from 'react-redux'

import Group from './group'

import { selectIndiv } from '../reducers/individual'
import { updatePreference } from '../reducers/group'


// import { thunkPupFetcher } from './action-creators'; 
// console.log(receivePups)

const mapStateToProps = (state, ownProps) => ({
	group: state.group.group,
	selected: state.indiv.selected
})


const mapDispatchToProps = (dispatch, getState) => ({
	select: indiv => dispatch(selectIndiv(indiv)),
	updatePreference: (liker, likee, amount) => 
		dispatch(updatePreference(liker, likee, amount))
})


export default connect(mapStateToProps, mapDispatchToProps)(Group)