import axios from 'axios'

const initialState = { group: [] }

// const replace = (arr, thiss, thatt) => {
// 	return arr.map(elm => elm===thiss?thatt:elm);
// }

// action
const LOAD_GROUP = 'LOAD_GROUP'
const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE'

// action-generator
export const loadGroup = group => ({ type: LOAD_GROUP, group }) 
export const updatePreference = (liker, likee, amount) => ({
	type: UPDATE_PREFERENCE,
	liker,
	likee,
	amount
})


export default (state=initialState, action) => {
	const newState = {...state}

  switch(action.type) {

  case LOAD_GROUP:
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