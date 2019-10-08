import { SET_ADDRESS } from '../actionNames'

export const initialState = {
  street: '',
  house_number: '',
  city: '',
  zip_code: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return ({...state, [action.field]: action.value})

    default:
      return state
  }
}
