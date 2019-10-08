import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";

const Toppings = withRouter((props) => {
  return (
    <div className="checkboxgroup">
      <h3>Your toppings:</h3>
      <div className="sidedish-checkbox">
        {
          props.item.toppings.map((topping) => (
            <label key={topping.id} className="checkbox-inline">
              <input
                className="checkbox"
                value={topping.added}
                onChange={() => props.addTopping(props.item.id, topping.id)}
                type="checkbox" />
              <span>with {topping.name}:</span><div className="meal__price">{topping.price}$ </div>
            </label>
          ))
        }
      </div>
      <button onClick={(e) => {
        e.preventDefault()
        props.history.push('/payment')
        props.goToPayment(props.item)
      }} className="order-btn">Send</button>
    </div>
  )
})

Toppings.propTypes = {
  item: PropTypes.object.isRequired,
  goToPayment: PropTypes.func.isRequired,
  addTopping: PropTypes.func.isRequired,
}

export default Toppings
