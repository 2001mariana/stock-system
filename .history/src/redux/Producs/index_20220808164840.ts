import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  products: Products
})

const store = createStore(reducers)

export default store
