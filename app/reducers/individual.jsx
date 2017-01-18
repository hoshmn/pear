import axios from 'axios'

const initialState = { selected: {} }

// action
const SELECT_INDIV = 'SELECT_INDIV'

// action-generator
export const selectIndiv = indiv => ({ type: SELECT_INDIV, indiv }) 

export default (state=initialState, action) => {
	const newState = Object.assign({}, state)

  switch(action.type) {

  case SELECT_INDIV:
  	newState.selected = action.indiv
 		break

 	default:
 		return state
  }
  return newState
}