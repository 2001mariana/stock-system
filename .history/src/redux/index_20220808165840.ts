import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux';

import Products from '../sharedComponents/Table/Table.mockData'

const reducers = combineReducers({
  products: Products
})

const store = createStore(reducers)

export default store
