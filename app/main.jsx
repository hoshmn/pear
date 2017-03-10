'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
import GroupContainer from './components/GroupContainer'
import PairViewerContainer from './components/PairViewerContainer'
import MenuContainer from './components/MenuContainer'
console.log(MenuContainer)
import { loadAll, loadGroup } from './reducers/individual'
import { loadGroups } from './reducers/groups'

const loadGroupMembers = (nextState) => {
	const groupId = nextState.params.groupId
	store.dispatch(loadGroup(groupId))
}

const loadAllGroups = (nextState) => {
	store.dispatch(loadGroups())
}

render (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MenuContainer} onEnter={loadAllGroups} />
    		<Route path="/group/:groupId" component={GroupContainer} onEnter={loadGroupMembers} />
     		<Route path="/pair/:groupId" component={PairViewerContainer} />
    	</Router>
  </Provider>,
  document.getElementById('main')
);
