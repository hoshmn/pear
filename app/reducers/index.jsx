import { combineReducers } from 'redux'
import groupsReducer from './groups'
import indivReducer from './individual'

const rootReducer = combineReducers({
  groups: groupsReducer,
  indiv: indivReducer
})

export default rootReducer
