'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import GroupContainer from './components/GroupContainer'
import {loadGroup} from './reducers/group'
  
// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav> 
//       {children}
//     </div>
// )


const group = [
  {
    id: 1,
    name: 'Josh',
    Gil: 3,
    Aditya: 9,
    Rose: 8
  },{
    id: 2,
    name: 'Gil',
    Josh: -2,
    Aditya: 9,
    Rose: 2
  },{
    id: 3,
    name: 'Aditya',
    Gil: 7,
    Josh: 9,
    Rose: -1
  },{
    id: 4,
    name: 'Rose',
    Gil: 7,
    Aditya: 0,
    Josh: 2
  },{
    id: 5,
    name: 'Simon',
    Gil: 7,
    Aditya: 9,
    Josh: -10
  }
]


const loadGroupOnEnter = () => {
  store.dispatch(loadGroup(group))
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={GroupContainer} onEnter={loadGroupOnEnter} />
    </Router>
  </Provider>,
  document.getElementById('main')
);