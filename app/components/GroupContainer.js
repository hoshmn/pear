import React from 'react'
import { connect } from 'react-redux'

import Group from './group'

import { selectIndiv, updatePreference } from '../reducers/individual'

const mapStateToProps = (state, ownProps) => ({
	name: state.indiv.groupName,
	members: state.indiv.groupMembers,
	selected: state.indiv.selected,
	groupId: state.indiv.groupId
})


const mapDispatchToProps = (dispatch, getState) => ({
	select: indiv => dispatch(selectIndiv(indiv)),
	updatePreference: (liker, likee, amount) => 
		dispatch(updatePreference(liker, likee, amount))
})


export default connect(mapStateToProps, mapDispatchToProps)(Group)