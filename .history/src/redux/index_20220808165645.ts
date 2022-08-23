import { combineReducers, legacy_createStore } from 'redux'

import Products from '../sharedComponents/Table/Table.mockData'

const reducers = combineReducers({
  products: Products
})

const store = legacy_createStore(reducers)

export default store
