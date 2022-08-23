/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import Products from '../sharedComponents/Table/Table.mockData'

// @ts-ignore
const reducers = combineReducers({ products: Product })

const store = createStore(
  reducers, // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
