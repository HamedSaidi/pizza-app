import { SET_LOADING } from '../actionNames'

export const initialState = true

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading

    default:
      return state
  }
}
