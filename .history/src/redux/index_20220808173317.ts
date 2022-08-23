/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import ProductsReducer from './Producs/Products.reducer'

const reducers = combineReducers({ potato: ProductsReducer })

const store = createStore(
  reducers, // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
