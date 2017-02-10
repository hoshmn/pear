import axios from 'axios'
// import { Individual } from 'APP/app/utils'

// const initialState = { group: { title: '', members: [] } }

// const replace = (arr, thiss, thatt) => {
// 	return arr.map(elm => elm===thiss?thatt:elm);
// }




// export default (state=initialState, action) => {
// 	const newState = {...state}

//   	switch(action.type) {

// 	  	case RECEIVE_GROUP:
// 	  		newState.group = action.group
// 	 		break

// 	 		//cheating a bit here... ideally create NEW version of liker, update preference,
// 	 		//update "selected" in other reducer, then update group
// 	 	case UPDATE_PREFERENCE:
// 	 		action.liker[action.likee.name]=action.amount //change liker preference for likee
// 	 		// newState.group = [...newState.group] // force rerender...
// 	 		break

// 	 	default:
// 	 		return state
//   }
//   return newState
// }