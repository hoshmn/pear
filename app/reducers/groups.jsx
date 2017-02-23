import axios from 'axios'

const RECEIVE_GROUPS = 'RECEIVE_GROUPS'
	
export const receiveGroups = groups => ({ type: RECEIVE_GROUPS, groups})

export const loadGroups = groupId => dispatch => {
	axios.get('/api/group')
		.then(res => res.data)
		.then(groups => dispatch(receiveGroups(groups)))
}

const initialState = { groups: [] }

export default (state=initialState, action) => {
	const newState = {...state}

  	switch(action.type) {

	  	case RECEIVE_GROUPS:
	  		console.log('reduce', action.groups)
	  		newState.groups = action.groups
	 		break

	 	default:
	 		return state
  }
  return newState
}