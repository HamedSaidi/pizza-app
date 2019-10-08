import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'

import { card, items, address, payload, isLoading } from './reducers'

const browserHistory = createBrowserHistory()
const middleware = [thunk, routerMiddleware(browserHistory)]

export const history = browserHistory
export const store = () => createStore(
  combineReducers({items, isLoading, card, address, payload, router: routerReducer}),
  compose(applyMiddleware(...middleware)),
)

export default store
