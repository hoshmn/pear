import axios from 'axios'
import { Individual } from 'APP/app/utils'

const initialState = { group: { title: '', members: [] } }

// const replace = (arr, thiss, thatt) => {
// 	return arr.map(elm => elm===thiss?thatt:elm);
// }

// actions
const RECEIVE_GROUP = 'RECEIVE_GROUP'

// const LOAD_ALL = 'LOAD_ALL'

const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE'

// action-generators
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

export const updatePreference = (liker, likee, amount) => ({
	type: UPDATE_PREFERENCE,
	liker,
	likee,
	amount
})


export default (state=initialState, action) => {
	const newState = {...state}

  switch(action.type) {

  case RECEIVE_GROUP:
  	newState.group = action.group
 		break

 		//cheating a bit here... ideally create NEW version of liker, update preference,
 		//update "selected" in other reducer, then update group
 	case UPDATE_PREFERENCE:
 		action.liker[action.likee.name]=action.amount //change liker preference for likee
 		newState.group = [...newState.group] // force rerender...
 		break

 	default:
 		return state
  }
  return newState
}