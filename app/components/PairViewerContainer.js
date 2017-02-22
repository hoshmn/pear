import React from 'react'
import { connect } from 'react-redux'

import PairViewer from './PairViewer'

const mapStateToProps = (state, ownProps) => ({
	name: state.indiv.groupName,
	members: state.indiv.groupMembers,
	selected: state.indiv.selected,
	groupId: state.indiv.groupId
})


// const mapDispatchToProps = (dispatch, getState) => ({
// 	select: indiv => dispatch(selectIndiv(indiv)),
// 	updatePreference: (liker, likee, amount) => 
// 		dispatch(updatePreference(liker, likee, amount))
// })


export default connect(mapStateToProps)(PairViewer)