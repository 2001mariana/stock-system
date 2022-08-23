import thunk from 'redux-thunk'

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import ProductsReducer from './Producs/Products.reducer'

const reducers = combineReducers({ products: ProductsReducer })

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), 
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
