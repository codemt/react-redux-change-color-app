import { createStore, combineReducers } from 'redux'
import changeColorReducer from './reducers/changeColorReducer'

const AllReducers = combineReducers({
    data : changeColorReducer
})

const store = createStore(
        AllReducers,
        window.devToolsExtension && window.devToolsExtension()
)

console.log(store.getState())

export default store;