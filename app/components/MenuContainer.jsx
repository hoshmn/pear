import React from 'react'
import { connect } from 'react-redux'

import Menu from './Menu'

const mapStateToProps = (state, ownProps) => ({
	groups: state.groups.groups
})

export default connect(mapStateToProps)(Menu)