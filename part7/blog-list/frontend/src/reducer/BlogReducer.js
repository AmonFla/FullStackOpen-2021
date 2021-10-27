import servBlog from '../service/blogs'

const NotificationReducer = (state = [], action) => {
  setUserToken()
  switch(action.type){
  case 'BLOG-INIT':
    return action.data
  case 'BLOG-ADD':
    return [...state, action.data]
  case 'BLOG-UPDATE':
    return state.map(b => b.id === action.data.id ? action.data : b)
  case 'BLOG-DELETE':
    return state.filter(b => b.id !== action.data.id)
  default:
    return state
  }
}

const setUserToken = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  servBlog.setToken(user.token)
}
export const newBlog = (data) => {
  return async dispatch => {
    const newEntry = await servBlog.create(data)
    dispatch({
      type: 'BLOG-ADD',
      data: newEntry
    })
  }
}

export const updateBlog = (data) => {
  return async dispatch => {
    await servBlog.update(data)
    dispatch({
      type: 'BLOG-UPDATE',
      data
    })
  }
}

export const deleteBlog = (data) => {
  return async dispatch => {
    await servBlog.remove(data)
    dispatch({
      type: 'BLOG-DELETE',
      data
    })
  }
}

export const initBlog = () => {
  return async dispatch => {
    const data = await servBlog.getAll()
    console.log(data)
    dispatch({
      type: 'BLOG-INIT',
      data

    })
  }
}

export default NotificationReducer