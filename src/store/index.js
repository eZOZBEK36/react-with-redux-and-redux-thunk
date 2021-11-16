import thunk from 'redux-thunk'
import { cashReducer } from './reducers/cashReducer'
import { customerReducer } from './reducers/customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootStore = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
})

export const store = createStore(
	rootStore,
	composeWithDevTools(applyMiddleware(thunk)),
)
