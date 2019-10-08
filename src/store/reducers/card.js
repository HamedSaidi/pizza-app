import { SET_CARD_DATA } from '../actionNames'

export const initialState = {
  security_code: '',
  creditCardNumber: '',
  expiryDate: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      return ({...state, [action.key]: action.value})

    default:
      return state
  }
}
