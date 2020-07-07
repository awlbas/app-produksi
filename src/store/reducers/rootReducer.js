import { combineReducers } from "redux"
import batchReducer from "./batchReducer"
import itemReducer from "./itemReducer"

// console.log('rootReducer')

const rootReducer = combineReducers({
  batchReducer, itemReducer
})

export default rootReducer