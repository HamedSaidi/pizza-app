import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png'

import { Toppings } from './'

const Item = React.memo(({item = {}, addItem, addTopping, goToPayment}) => (<>
    <div className="restaurant">
      <div className="logowrapper">
        <div className="baloon-container restaurantlabel "/>
        <div className="logo-n">
          <span className="img-link">
            <img src={logo} border="0" alt="BURGER KING ® - Home of the Whoppers!" />
          </span>
        </div>
      </div>
      <div className="detailswrapper">
        <h2 className="restaurantname">
          {item.name}
        </h2>
        <div className="kitchens">
          {item.description}
        </div>
        <div className="meal__price">
          {item.price}$
        </div>
      </div>
      <div onClick={() => addItem(item.id)} className="menucard-meal__sidedish-button">{ item.added ? 'X' : 'ADD' }</div>
    </div>
    {
      item.added ? <Toppings item={item} goToPayment={goToPayment} addTopping={addTopping} /> : null
    }
  </>
))

Item.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  addTopping: PropTypes.func.isRequired,
}

export default Item
