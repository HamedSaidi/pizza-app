import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadItems, addItem, addTopping, goToPayment } from '../../store/actions'

import { ItemsList, LoadingIndicator } from '../components'
import { getItemsState, getLoadingState} from './selectors'

class App extends React.PureComponent {
  componentDidMount() {
    this.props.loadItems()
  }

  loadItems = (page, per) => {
    this.props.loadItems({page, per})
  }

  render() {
    return (
      <>
        <h2>Pizzas</h2>
        <ItemsList {...this.props} />
        { this.props.isLoading ? <LoadingIndicator /> : null }
      </>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  loadItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  addTopping: PropTypes.func.isRequired,
  goToPayment: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  addItem: (id) => dispatch(addItem(id)),
  addTopping: (toppingId, id) => dispatch(addTopping(toppingId, id)),
  goToPayment: (item) => dispatch(goToPayment(item)),
  loadItems: () => dispatch(loadItems()),
})

const mapStateToProps = state => ({
  items: getItemsState(state),
  isLoading: getLoadingState(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
