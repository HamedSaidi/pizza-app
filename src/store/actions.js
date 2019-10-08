import * as actionsNames from './actionNames'
import { history } from "./"
import { items } from './utils'

const setItems = (items) => ({
  type: actionsNames.SET_ITEMS,
  items
})

export const submitAddress = () => {
  return (dispatch) => {
    history.push('/list')
  }
}

export const handleAddressChange = (field, value) => ({
  type: actionsNames.SET_ADDRESS,
  field,
  value
})

export const addItem = (id) => ({
  type: actionsNames.CHOOSE_ITEM,
  id
})

export const addTopping = (itemId, id) => ({
  type: actionsNames.ADD_TOPPING,
  itemId,
  id
})

export const setActiveTab = (activeTab) => ({
  type: actionsNames.SET_ACTIVE_TAB,
  activeTab
})

export const switchTab = (activeTab) => {
  return (dispatch) => {
    dispatch(setActiveTab(activeTab))
    dispatch(loadItems())
  }
}

export const setLoading = (loading) => ({
  type: actionsNames.SET_LOADING,
  loading
})

export const loadItems = ({per = 10, page = 1} = {per: 10, page: 1}) => {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    dispatch(setItems(items))
    dispatch(setLoading(false))
  }
}

export const setPaymentPalyoad = (payload) => ({
  type: actionsNames.SET_PAYMENT_PAYLOAD,
  payload,
})

export const setCardData = (key, value) => ({
  type: actionsNames.SET_CARD_DATA,
  value,
  key
})

export const goToPayment = (item) => ({
  type: actionsNames.GO_TO_PAYMENT,
  item
})

export const sendPaymentPayload = () => {
  return (dispatch, getState) => {
    const { address, card, payload } = getState()
    if (payload.item && payload.item.id) {
      const payloadData = { address, card }
      dispatch(setPaymentPalyoad(payloadData))
      const { payload: payloadResult } = getState()

      console.log('Payment Payload = ', payloadResult)
    } else {
      console.warn('Payment Payload Issue: No Selected Item!')
    }
  }
}
