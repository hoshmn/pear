import { combineReducers } from 'redux'
import groupReducer from './group'
import indivReducer from './individual'

const rootReducer = combineReducers({
  group: groupReducer,
  indiv: indivReducer
})

export default rootReducer
