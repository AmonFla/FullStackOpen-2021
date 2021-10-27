import { createStore, combineReducers, applyMiddleware } from 'redux'
import NotificationReducer from '../reducer/NotificactionReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notification: NotificationReducer,
})

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store