import React from 'react'
import PropTypes from 'prop-types'
import * as CreditCard from 'credit-card'
import { withRouter } from "react-router-dom";

const inputs = [
  { field: 'creditCardNumber', placeholder: 'Credit Card Number', type: 'number' },
  { field: 'expiryDate', placeholder: 'Expiry Date', type: 'month' },
  { field: 'security_code', placeholder: 'cvv', type: 'number' }
]

class PaymentForm extends React.Component {
  state = {}

  handleChange = (event) => {
    this.props.setCardData(event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const [expiryYear, expiryMonth] = this.state.expiryDate.split('-')
    const number = this.state.creditCardNumber
    const cardType = CreditCard.determineCardType(this.state.creditCardNumber)
    const cvv = this.state.security_code
    const validation = CreditCard.validate({expiryMonth, expiryYear, cardType, cvv, number})

    if (validation.validCardNumber && validation.validCvv && validation.validExpiryMonth && validation.validExpiryYear) {
      this.props.sendPaymentPayload()
      this.props.history.push('/done')
    } else {
      console.log('Invalid Payment Credentials!', validation)
    }
  }

  render() {
    return(
      <div className="address-container">
        <h1>Payment</h1>
        <form className="address-form" onSubmit={this.handleSubmit}>
        {
          inputs.map(({field, type, placeholder}) => (
            <input
              name={field}
              key={field}
              required="required"
              type={type}
              placeholder={placeholder}
              onChange={this.handleChange} />
          ))
        }
          <button className="order-btn address-btn" onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


PaymentForm.propTypes = {
  sendPaymentPayload: PropTypes.func.isRequired,
  setCardData: PropTypes.func.isRequired,
}

export default withRouter(PaymentForm);
