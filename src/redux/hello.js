import { createStore } from 'redux'
import myReducer from "./reducers/index"
import { status, sort } from "./actions/index"

const store = createStore(myReducer)
store.dispatch(status())

store.dispatch(sort({
    by: "name",
    value: -1
}))

console.log(store.getState())