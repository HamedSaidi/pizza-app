import { SET_PAYMENT_PAYLOAD, GO_TO_PAYMENT } from '../actionNames'

export const initialState = {
  item: {},
  address: {},
  card: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT_PAYLOAD:
      return ({...state, ...action.payload})

    case GO_TO_PAYMENT:
      const item = {
        id: action.item.id,
        toppingsIds: action.item.toppings.filter(({added}) => added).map(({id}) => id)
      }
      return ({...state, item})

    default:
      return state
  }
}
