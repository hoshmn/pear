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
import { loadAll } from './reducers/individual'
import { loadGroups } from './reducers/groups'

const loadGroupOnEnter = (nextState) => {
	console.log('hi',nextState.params);
	store.dispatch(loadAll())
}

const loadGroupsOnEnter = (nextState) => {
	console.log('load groups')
	store.dispatch(loadGroups())
}

render (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MenuContainer} onEnter={loadGroupsOnEnter} />
    		<Route path="/group" component={GroupContainer} onEnter={loadGroupOnEnter} />
     		<Route path="/pair/:groupId" component={PairViewerContainer} />
    	</Router>
  </Provider>,
  document.getElementById('main')
);
