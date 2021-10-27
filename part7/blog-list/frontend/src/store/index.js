import { createStore, combineReducers, applyMiddleware } from 'redux'
import NotificationReducer from '../reducer/NotificactionReducer'
import BlogReducer from '../reducer/BlogReducer'
import UserReducer from '../reducer/UserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notification: NotificationReducer,
  blogs: BlogReducer,
  user: UserReducer
})

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store