import servBlog from '../service/blogs'

const BlogReducer = (state = [], action) => {
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


export const newBlog = (data,token) => {
  return async dispatch => {
    servBlog.setToken(token)
    const newEntry = await servBlog.create(data)
    console.log(newEntry)
    dispatch({
      type: 'BLOG-ADD',
      data: newEntry
    })
  }
}

export const updateBlog = (data,token) => {
  return async dispatch => {
    servBlog.setToken(token)
    await servBlog.update(data)
    dispatch({
      type: 'BLOG-UPDATE',
      data
    })
  }
}

export const deleteBlog = (data,token) => {
  return async dispatch => {
    servBlog.setToken(token)
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
    dispatch({
      type: 'BLOG-INIT',
      data

    })
  }
}

export default BlogReducer