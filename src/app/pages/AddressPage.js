import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { handleAddressChange, submitAddress } from '../../store/actions'
import { AddressForm } from '../components'
import { getAddressState } from './selectors'

const App = (props) => (
  <AddressForm {...props} />
)

App.propTypes = {
  address: PropTypes.object.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  submitAddress: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleAddressChange: (field, value) => dispatch(handleAddressChange(field, value)),
  submitAddress: (address) => dispatch(submitAddress(address)),
})

const mapStateToProps = state => ({
  address: getAddressState(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
