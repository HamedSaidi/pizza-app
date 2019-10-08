import React from 'react'
import PropTypes from 'prop-types'

import { Item } from './'

const ItemsList = ({items = [], addItem, addTopping, goToPayment}) => (
  <div className="items-list">
    {
      items.map(item => (<Item key={item.id} goToPayment={goToPayment} addTopping={addTopping} addItem={addItem} item={item}/>))
    }
  </div>
)

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  addTopping: PropTypes.func.isRequired,
  goToPayment: PropTypes.func.isRequired,
};


export default React.memo(ItemsList)
