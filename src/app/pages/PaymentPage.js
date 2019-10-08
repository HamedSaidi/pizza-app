import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setCardData, sendPaymentPayload } from '../../store/actions'
import { PaymentForm } from '../components'

const App = (props) => (
  <PaymentForm {...props}/>
)

App.propTypes = {
  setCardData: PropTypes.func.isRequired,
  sendPaymentPayload: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  sendPaymentPayload: () => dispatch(sendPaymentPayload()),
  setCardData: (key, value) => dispatch(setCardData(key, value)),
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(App)
