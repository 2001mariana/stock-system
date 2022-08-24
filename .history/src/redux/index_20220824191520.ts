import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
/* eslint-disable @typescript-eslint/no-explicit-any */
import thunk, { ThunkAction } from 'redux-thunk'

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import ProductsReducer from './Producs/Products.reducer'
import AuthenticationReducer from './Authentication/Authentication.reducer'

const reducers = combineReducers({
  products: ProductsReducer,
  authentication: AuthenticationReducer
})

const persistedReducer = persistReducer(
  {
    key: 'algastock',
    storage,
    blacklist: ['products']
  },
  reducers
)

const enhancers = [
  applyMiddleware(thunk),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(e => e)

const store = createStore(
  persistedReducer,
  compose(...enhancers)
)


const persistor = persistStore(store)

export interface Action<T = any> {
  type: string
  payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type Thunk<T = any> = ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export { store, persistor }
