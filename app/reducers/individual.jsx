import axios from 'axios'
import { Individual, swap } from 'APP/app/utils'

// actions
const SELECT_INDIV = 'SELECT_INDIV'
const UPDATE_INDIV = 'UPDATE_INDIV'
const RECEIVE_GROUP = 'RECEIVE_GROUP'

// action-generators
export const selectIndiv = indiv => ({ type: SELECT_INDIV, indiv }) 

export const updateIndiv = indiv => ({ type: UPDATE_INDIV, indiv })

//optimistic loading
export const updatePreference = (liker, likee, amount) => {
	axios.put('api/individual/', {liker, likee, amount})
	const updatedLiker = {...liker}
	updatedLiker[likee.name] = amount
	return updateIndiv(updatedLiker)
}

// export const updatePreference = (liker, likee, amount) => dispatch => {
// 	axios.put('api/individual/', {liker, likee, amount})
// 		.then(res => res.data)
// 		.then(updatedIndiv => {
// 			const formattedIndiv = new Individual(updatedIndiv)
// 			formattedIndiv[likee.name] = amount
// 			dispatch(updateIndiv(formattedIndiv))
// 		})
// 	}

export const receiveGroup = group => ({ type: RECEIVE_GROUP, group }) 

export const loadAll = () => dispatch => {
	axios.get('/api/individual/')
		.then(res => res.data)
		.then(all => dispatch(receiveGroup({ 
			title: 'ALL', 
			members: all.map(indiv=>new Individual(indiv)),
			id: 0
		})))
}

export const loadGroup = groupId => dispatch => {
	axios.get(`/api/group/${groupId}`)
		.then(res => res.data)
		.then(group => {
			const members = group && group.individuals || []

			dispatch(receiveGroup({ 
					title: 'group ' + groupId, 
					members: members.map(indiv=>new Individual(indiv)),
					id: groupId
				}))
		})
}


const initialState = { 
	selected: {}, 
	groupName: '', 
	groupMembers: [],
	groupId: 0
	}
	
export default (state=initialState, action) => {
	const newState = {...state}

	switch(action.type) {

	case SELECT_INDIV:
  		newState.selected = action.indiv
 		break

	case UPDATE_INDIV:
	 	const updatedIndiv = action.indiv
 		newState.selected = updatedIndiv

		newState.groupMembers = swap(newState.groupMembers, updatedIndiv)
 		break

	case RECEIVE_GROUP:
		console.log('reduce group', action.group)
		newState.groupId = action.group.id
	  	newState.groupName = action.group.title
	  	newState.groupMembers = action.group.members
	 	break

 	default:
 		return state
  }
  return newState
}