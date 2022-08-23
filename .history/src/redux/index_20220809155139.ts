/* eslint-disable @typescript-eslint/no-explicit-any */
import thunk, { ThunkAction } from 'redux-thunk'

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import ProductsReducer from './Producs/Products.reducer'

export interface Action<T = any> {
  type: string
  payload?: T
}

export type Thunk<T = any> = ThunkAction<
  void,
  ReturnType< typeof reducers,
  unknown,
  Action<T>
>

const reducers = combineReducers({ products: ProductsReducer })

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk), // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
