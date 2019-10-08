import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"

const inputs = [
  { field: 'street', placeholder: 'Street Address', type: 'text' },
  { field: 'house_number', placeholder: 'House Number', type: 'number' },
  { field: 'city', placeholder: 'City', type: 'text' },
  { field: 'zip_code', placeholder: 'Zip Code', type: 'number'}
]

class AddressForm extends React.Component {
  handleChange = (event) => {
    this.props.handleAddressChange(event.target.name, event.target.value)
    event.preventDefault()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.history.push('/list')
  }

  render() {
    return (
      <div className="address-container">
        <h1>User Addess</h1>
        <form className="address-form" onSubmit={this.handleSubmit}>
          {
            inputs.map(({field, placeholder, type}) => (<input
              name={field} required="required"
              value={this.props.address[field]}
              key={field}
              placeholder={placeholder}
              type={type}
              onChange={this.handleChange} />)
            )
          }
          <button className="order-btn address-btn" onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  submitAddress: PropTypes.func.isRequired,
}

export default withRouter(AddressForm);
