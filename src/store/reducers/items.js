import { SET_ITEMS, CHOOSE_ITEM, ADD_TOPPING } from '../actionNames'

export const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items

    case CHOOSE_ITEM:
      return state.map(item => {
        return ({...item, added: item.id === action.id})
      })

    case ADD_TOPPING:
      return state.map(item => {
        if (item.id === action.itemId) {
          const toppings = item.toppings.map((topping) =>
            topping.id === action.id ? ({...topping, added: !topping.added}) : topping
          )
          return ({...item, toppings})
        }
        return item
      })

    default:
      return state
  }
}
