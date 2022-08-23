import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from 'redux'

import Products from '../sharedComponents/Table/Table.mockData'

// @ts-ignore
const reducers = combineReducers({ products: Products })

const store = createStore(reducers)

export default store
