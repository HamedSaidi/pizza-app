import { createSelector } from 'reselect'

// list page selectors
const getActiveTab = (state) => state

export const getActiveTabState = createSelector(
  [ getActiveTab ],
  (state) => state.activeTab
)

const getItems = (state) => {
  return state
}

export const getItemsState = createSelector(
  [ getItems ],
  (state) => state.items
)

const getAddress = (state) => state

export const getAddressState = createSelector(
  [ getAddress ],
  (state) => state.address
)

const getLoading = (state) => state

export const getLoadingState = createSelector(
  [ getLoading ],
  (state) => state.isLoading
)

const getCard = (state) => state

export const getCardState = createSelector(
  [ getCard ],
  (state) => state.card
)
