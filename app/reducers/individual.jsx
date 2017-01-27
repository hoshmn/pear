import axios from 'axios'
import { Individual } from 'APP/app/utils'

const initialState = { 
	selected: {}, 
	group: { title: '', members: [] }
	}

// action
const SELECT_INDIV = 'SELECT_INDIV'
const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE'
const RECEIVE_GROUP = 'RECEIVE_GROUP'

// action-generator
export const selectIndiv = indiv => ({ type: SELECT_INDIV, indiv }) 

export const updatePreference = (liker, likee, amount) => ({
	type: UPDATE_PREFERENCE,
	liker,
	likee,
	amount
})

export const receiveGroup = group => ({ type: RECEIVE_GROUP, group }) 

export const loadAll = () => dispatch => {
	axios.get('/api/group/')
		.then(res => res.data)
		.then(all => dispatch(receiveGroup({ title: 'ALL', members: all.map(indiv=>new Individual(indiv))})))
}

export const loadGroup = groupId => dispatch => {
	axios.get(`/api/group/${groupId}`)
		.then(res => res.data)
		.then(members => dispatch(receiveGroup({ title: 'ALL', members: members.map(indiv=>new Individual(indiv))})))
}



export default (state=initialState, action) => {
	const newState = Object.assign({}, state)

	switch(action.type) {

	case SELECT_INDIV:
  		newState.selected = action.indiv
 		break

	case UPDATE_PREFERENCE:
		const likerCopy = Object.assign({}, action.liker)
		likerCopy[action.likee.name] = action.amount
 		newState.selected = likerCopy

 		newState.group.members = newState.group.members.map(member=>
 			likerCopy.id==member.id ? likerCopy : member)
 		break

	case RECEIVE_GROUP:
	  	newState.group = action.group
	 	break

 	default:
 		return state
  }
  return newState
}